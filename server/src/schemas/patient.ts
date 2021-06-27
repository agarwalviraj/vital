import mongoose from "mongoose";
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

export const PatientSchema: any = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "Username Too short"],
    unique: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  vitals: {
    type: [String],
    required: true,
  },
  Doctor: {
    type: String,
    requied: true,
    match: [emailRegex, "Email in wrong format"],
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});
