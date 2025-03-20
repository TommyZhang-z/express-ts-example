// 别删，删了会报错
export {};

declare global {
  // declaration merging
  namespace Express {
    interface Request {
      user?: UserSession;
    }
  }

  interface User {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    hashedPassword: string;
  }

  interface UserSession extends Pick<User, "id" | "email" | "name"> {}
}
