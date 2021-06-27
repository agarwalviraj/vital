import mongoose from "mongoose";
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

export const UserSchema: any = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: [emailRegex, "Email in wrong format"],
    unique: true,
  },
  username: {
    type: String,
    required: true,
    minlength: [4, "Username Too short"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    // select: false,
  },
});
