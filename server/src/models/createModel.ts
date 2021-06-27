import mongoose from "mongoose";
const bloodPressureModel = (ModelName: string) => {
  return mongoose.model(
    ModelName,
    new mongoose.Schema({
      time: String,
      value: String,
    })
  );
};

export default bloodPressureModel;
