import { Request, Response } from "express";
import mongoose from "mongoose";
import express from "express";
import { compare, hash } from "bcrypt";
import { signJwt } from "../utils/jwtService";
import { UserSchema } from "../schemas/user";
import { AlertSchema } from "../schemas/alert";
import notify from "../utils/sendSingleNotification";
import multer from "multer";
const app = express();
app.use(express.json());

const user = mongoose.model("User", UserSchema);
const alert = mongoose.model("Alert", AlertSchema);
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/user");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${file.originalname}`);
//   },
// });
// const upload = multer({
//   storage: multerStorage,
// });
// const uploadUserphoto = upload.array("images", 1);
// var emptyArray: any[] = [];

// app.post("/register", uploadUserphoto, async (req: any, res) => {
//   //console.log("hello");
//   const original_name = req.files[0].originalname;

//   //res.send(schema);
//   try {
//     res.status(201).json({
//       status: "success",
//       data: original_name,
//     });
//   } catch (err) {
//     res.json(err);
//   }
// });

app.post("/register", async (req: Request, res: Response) => {
  const {
    email,
    username,
    password,
    name,
    qualifications,
    description,
    hospitalName,
    specialization,
  }: {
    email: string;
    username: string;
    password: string;
    name: String;
    qualifications: String;
    description: String;
    hospitalName: String;
    specialization: String;
  } = req.body;
  const hashedPassword = await hash(req.body.name, 14);
  console.log(specialization);

  try {
    const newUser = new user({
      email,
      username,
      password: hashedPassword,
      name,
      qualifications,
      description,
      hospitalName,
      specialization,
    });
    const dbResponse = await user.findOne({
      $or: [{ email: email }, { username: username }],
    });
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
  console.log(req.body.fcmtoken);

  user.updateOne(
    { $or: [{ email: emailOrUsername }, { username: emailOrUsername }] },
    { $set: { tokens: [req.body.fcmtoken] } }
  );
  const dbResponse: any = await user.findOne({
    $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
  });
  console.log(dbResponse);

  if (dbResponse == null)
    res.json({ success: false, message: "User Does not exist" });
  else if (!(await compare(password, dbResponse.password)))
    res.json({ success: false, message: "Invalid credentials" });
  else {
    const jwt = await signJwt({ email: dbResponse.email });

    res.json({ success: true, token: jwt });
  }
});

app.get("/", async (req: any, res: Response): Promise<void> => {
  const { DrMail }: { DrMail: string } = req.query;
  const result = await user.findOne({ email: DrMail });
  res.json(result);
});

app.post("/alerts", async (req: Request, res: Response): Promise<void> => {
  // const newAlert= req.body.alerts;
  const newAlert = new alert(req.body);
  newAlert.save((err: any) => {
    if (err) {
      res.json({ success: false, message: err });
    } else {
      res.json({ success: true, message: "Alert Added" });
    }
  });
});

app.get("/alerts", async (req: any, res: Response): Promise<void> => {
  const { DrMail }: { DrMail: string } = req.query;
  const result = await alert.find({ Doctor: DrMail });
  res.json(result);
});

app.delete("/alerts", async (req: any, res: Response): Promise<void> => {
  const { DrMail }: { DrMail: string } = req.query;
  const result = await alert.deleteMany({ Doctor: DrMail });
  res.json(result);
});

app.post("/notify", async (req: any, res: any): Promise<void> => {
  // res.send(await notify());
  console.log("done");
});

export default app;
