import { dataStore } from "@/db";
import { type Request, type Response, type NextFunction } from "express";

interface AuthMiddlewareOptions {
  required?: boolean;
  errorMessage?: string;
}

export const auth =
  (options: AuthMiddlewareOptions = { required: true }) =>
  (req: Request, res: Response, next: NextFunction) => {
    const userId = req.headers.authorization;

    // If no user ID provided
    if (!userId) {
      if (options.required) {
        res
          .status(401)
          .json({ message: options.errorMessage || "Authentication required" });
        return;
      }
      next();
      return;
    }

    // Try to find the user
    const user = dataStore.users.find((user) => user.id === userId);

    // If user not found
    if (!user) {
      if (options.required) {
        res.status(401).json({
          message: options.errorMessage || "Invalid authentication credentials",
        });
        return;
      }
      next();
      return;
    }

    // User found - attach to request
    req.user = user;
    next();
  };
