import { Request, Response } from "express";
import express from "express";
import { verifyJwt } from "../utils/jwtService";
const app = express();
app.use(express.json());

app.post("/", async (req: Request, res: Response) => {
  const jwt = req.body.jwt;

  try {
    const verifyResponse = await verifyJwt(jwt);
    if (verifyResponse) {
      res.json({
        success: true,
        message: "Token Verified",
        values: verifyResponse,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Wrong Token" });
  }
});

export default app;
