import * as express from "express";
import { Request, Response } from "express";
import AuthController from "../controller/AuthController";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("HALLO MY MONEY");
});

// auth
router.post("/auth/reqister", AuthController.register);

export default router;
