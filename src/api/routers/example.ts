import { auth } from "@/middlewares/auth";
import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the example route!" });
});

router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from the example route!" });
});

router.get("/protected", auth(), (req: Request, res: Response) => {
  res.json({ message: "Hello from the protected route!" });
});

export default router;
