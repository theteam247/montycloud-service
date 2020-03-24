import App from "./app";

import * as bodyParser from "body-parser";

const app = new App({
  port: 3000,
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    "middlewares/*",
  ],
  routes: ["routes/*"],
});

app.listen();
