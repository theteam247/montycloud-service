import { Request, Response, NextFunction } from "express";
import { v4 } from "uuid";
import db from "../globals/db";

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  db.then((db) => {
    db.get("events")
      .push({
        id: v4(),
        name: req.path,
        context: {
          ...req.cookies,
        },
        data: {
          method: req.method,
          query: req.query,
          body: req.body,
        },
        time: Date.now(),
      })
      .write();
  });

  next();
};

export default loggerMiddleware;
