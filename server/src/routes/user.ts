import { Request, Response } from "express";
import mongoose from "mongoose";
import express from "express";
import { compare, hash } from "bcrypt";
import { signJwt } from "../utils/jwtService";
const app = express();
app.use(express.json());
import { UserSchema } from "../schemas/user";

const user = mongoose.model("User", UserSchema);

app.post("/register", async (req: Request, res: Response) => {
  const {
    email,
    username,
    password,
    patients,
  }: { email: string; username: string; password: string; patients: string[] } =
    req.body;
  const hashedPassword = await hash(password, 14);

  try {
    const newUser = new user({
      email,
      username,
      password: hashedPassword,
      patients,
    });
    const dbResponse = await user.findOne({
      $or: [{ email: email }, { username: username }],
    });
    console.log(dbResponse);
    if (dbResponse === null) {
      newUser.save((err: any) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          res.json({ success: true, message: "User Added" });
        }
      });
    } else
      res.json({ success: false, message: "Email or Username Already Exists" });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});

app.post("/login", async (req: Request, res: Response): Promise<void> => {
  const { emailOrUsername, password } = req.body;
  const dbResponse: any = await user.findOne({
    $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
  });
  if (dbResponse == null)
    res.json({ sucess: false, message: "User Does not exist" });
  if (!(await compare(password, dbResponse.password)))
    res.json({ sucess: false, message: "Invalid credentials" });
  const jwt = await signJwt({ emailOrUsername });
  res.json({ success: true, token: jwt });
});

export default app;
