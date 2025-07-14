import express from "express";
import QuizAttempt from "../models/QuizAttempt.js";

const router = express.Router();

router.post("/quiz/start", async (req, res) => {
  try {
    const { categoryId, quizId } = req.body;

    if (!categoryId || !quizId) {
      return res.status(400).json({ error: "Missing categoryId or quizId" });
    }

    res.status(200).json({ message: "Quiz started" });
  } catch (err) {
    console.error("Error in /quiz/start:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/quiz/finish", async (req, res) => {
  try {
const { userId, quizId, categoryId, score, responses, totalQuestions, correctAnswers } = req.body;

    if (
  !userId || !quizId || !categoryId ||
  typeof score !== "number" ||
  typeof totalQuestions !== "number" ||
  typeof correctAnswers !== "number" ||
  !Array.isArray(responses)
) {
  return res.status(400).json({ error: "Invalid or missing required fields" });
}
    await QuizAttempt.create({
      userId,
      quizId,
      categoryId,
      score,
      totalQuestions,
      correctAnswers,
      responses,
      completedAt: new Date(),
    });

    return res.status(200).json({ message: "Quiz finished successfully" });
  } catch (error) {
    console.error("❌ Error in /quiz/finish:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/quiz/latest/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const latestAttempt = await QuizAttempt.findOne({ userId }).sort({ completedAt: -1 });

    if (!latestAttempt) {
      return res.status(404).json({ error: "No recent quiz attempt found" });
    }
    // console.log(latestAttempt.totalQuestions,"tot");
    res.status(200).json({
      quizId: latestAttempt.quizId,
      categoryId: latestAttempt.categoryId,
      score: latestAttempt.score,
      correctAnswers: latestAttempt.correctAnswers,
      totalQuestions: latestAttempt.totalQuestions,
      completedAt: latestAttempt.completedAt,
    });
  } catch (error) {
    console.error("❌ Error fetching latest quiz attempt:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;
