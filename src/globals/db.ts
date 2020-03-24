import Lowdb from "lowdb"
import FileAsync from "lowdb/adapters/FileAsync"

export default Lowdb(new FileAsync<{
  events: {
    id: string;
    name: string;
    context: {
      [key: string]: string;
    };
    data: {
      method: string;
      query: {
        [key: string]: string;
      },
      body: {
        [key: string]: string;
      },
    },
    time: number;
  }[];
}>('db.json'))
