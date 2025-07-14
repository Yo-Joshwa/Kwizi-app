import mongoose from "mongoose";
import QuestionSchema from "./Question.js";

const QuizSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  questions: [QuestionSchema],
});

export default mongoose.model("Quiz", QuizSchema);
