interface IEvent {
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
}

interface IDatabase {
  events: IEvent[]
}
