import mongoose from "mongoose";

export const PatientSchema: any = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [4, "Username Too short"],
    unique: true,
  },
  vitals: {
    type: [String],
    required: true,
  },
});
