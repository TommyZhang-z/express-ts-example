import express, { type Request, type Response } from "express";

const app = express();

// Root URL
app.get("/", (req: Request, res: Response) => {
  console.log("Print to terminal: someone accessed our root url!");
  res.json({ message: "Welcome to Lab05 Checkins Server's root URL!" });
});
