import * as express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("HALLO MY MONEY");
});

export default router;
