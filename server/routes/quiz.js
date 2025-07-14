import express from "express";
import Quiz from "../models/Quiz.js";

const router = express.Router();

router.get("/:categoryId/quizzes", async (req, res) => {
  const { categoryId } = req.params;

  try {
    const quizzes = await Quiz.find({ categoryId }); 
    res.json({ quizzes });
  } catch (err) {
    console.error("Failed to get quizzes:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
