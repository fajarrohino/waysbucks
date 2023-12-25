import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

// export default function authenticate(req: Request, res: Response, next: NextFunction) {
const authenticate = (req: Request, res: Response, next: NextFunction): Response => {
  const authorizonHeader = req.headers.authorization;
  if (!authorizonHeader || !authorizonHeader.startsWith("Bearer")) {
    return res.status(401).json({
      message: "not logged in yet!",
    });
  }
  const token = authorizonHeader.split(" ")[1];
  try {
    const loginSession = jwt.verify(token, "eannoy");
    res.locals.loginSession = loginSession;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "unauthorized",
    });
  }
  return;
};

export default authenticate;
