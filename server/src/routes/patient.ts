import { Request, Response } from "express";
import mongoose from "mongoose";
import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
const app = express();

app.use(express.json());

import { PatientSchema } from "../schemas/patient";

const patient = mongoose.model("Patient", PatientSchema);

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "/home/viraj/Pictures");
  },
  filename: (_, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });

app.post(
  "/add",
  upload.single("image"),
  async (req: Request, res: Response) => {
    const {
      name,
      age,
      sex,
      hospitalName,
      description,
      vitals,
      Doctor,
    }: {
      name: string;
      age: number;
      sex: string;
      hospitalName: string;
      description: string;
      vitals: string[];
      Doctor: string;
      image: any;
    } = req.body;
    console.log(name);

    const filename = req.file!.filename;
    try {
      const newPatient = new patient({
        name,
        age,
        sex,
        hospitalName,
        description,
        vitals,
        Doctor,
        image: {
          data: fs.readFileSync(path.join("/home/viraj/Pictures/", filename)),
          contentType: "image",
        },
      });
      const dbResponse = await patient.findOne({ name: name });

      if (dbResponse === null) {
        newPatient.save((err: any) => {
          if (err) {
            res.json({ success: false, message: err });
          } else {
            res.json({ success: true, message: "Patient Added" });
          }
        });
      } else res.json({ success: false, message: "Name Already Exists" });
    } catch (err) {
      res.json({ success: false, message: err });
    }
  }
);

app.get("/", async (req: any, res: Response): Promise<void> => {
  const { amt, DrMail }: { amt: number; DrMail: string } = req.query;
  const result = await patient.find({ Doctor: DrMail }).limit(amt);
  res.json(result);
});

export default app;
