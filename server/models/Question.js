import mongoose from "mongoose";
import OptionSchema from "./Option.js";

const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  difficulty: { type: String, enum: ["easy", "medium", "hard"], default: "medium" },
  options: [OptionSchema],
});

export default QuestionSchema;
