import { Request, Response } from "express";
import mongoose from "mongoose";
import express from "express";
const app = express();

app.use(express.json());

import { PatientSchema } from "../schemas/patient";

const patient = mongoose.model("Patient", PatientSchema);

app.post("/add", async (req: Request, res: Response) => {
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
  } = req.body;
  console.log(name);

  try {
    const newPatient = new patient({
      name,
      age,
      sex,
      hospitalName,
      description,
      vitals,
      Doctor,
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
});

app.get("/", async (req: any, res: Response): Promise<void> => {
  const { amt, DrMail }: { amt: number; DrMail: string } = req.query;
  const result = await patient.find({ Doctor: DrMail }).limit(amt);
  res.json(result);
});

export default app;
