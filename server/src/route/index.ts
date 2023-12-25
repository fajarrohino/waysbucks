import * as express from "express";
import { Request, Response } from "express";
import AuthController from "../controller/AuthController";
import authenticate from "../middlewares/auth";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("HALLO MY MONEY");
});

// auth
router.post("/auth/reqister", AuthController.register);
router.post("/auth/login", AuthController.login);
router.get("/auth/check", authenticate, AuthController.check);

export default router;
