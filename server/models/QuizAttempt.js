import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  quizId: {
    type: String,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  correctAnswers: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  responses: [
    {
      questionId: String,
      optionId: String,
      isCorrect: Boolean,
    },
  ],
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("QuizAttempt", quizAttemptSchema);
