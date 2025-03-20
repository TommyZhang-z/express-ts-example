import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.json({ message: "Welcome to the user route!" });
});

router.get("/hello", (_: Request, res: Response) => {
  res.json({ message: "Hello from the user route!" });
});

export default router;
