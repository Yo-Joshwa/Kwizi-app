import mongoose from "mongoose";

const OptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

export default OptionSchema;
