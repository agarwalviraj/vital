import mongoose from "mongoose";
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
export const AlertSchema: any = new mongoose.Schema({
  Doctor: {
    type: String,
    required: true,
    match: [emailRegex, "Email in wrong format"],
  },
  message: {
    type: String,
    required: true,
  },
  urgency: {
    type: String,
  },
  PatientId: {
    type: String,
  },
});
