import exampleRouter from "@/api/routers/example";
import userRouter from "@/api/routers/user";
import express, { json } from "express";

export const createApp = () => {
  const app = express();

  app.use(json());
  app.use("/api/example", exampleRouter);
  app.use("/api/user", userRouter);

  app.delete("api/clear", (_, res) => {
    res.status(200).json({ message: "Database cleared" });
  });

  return app;
};
