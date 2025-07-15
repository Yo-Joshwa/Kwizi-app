import express from "express";
import QuizAttempt from "../models/QuizAttempt.js";
import Category from "../models/Category.js";

const router = express.Router();

router.get("/user/:userId/stats", async (req, res) => {
  try {
    const { userId } = req.params;

    const attempts = await QuizAttempt.find({ userId }).sort({ completedAt: -1 });

    if (!attempts.length) {
      return res.status(404).json({ error: "No stats found" });
    }

    const statsMap = {};

    for (const attempt of attempts) {
      const catId = attempt.categoryId;

      if (!statsMap[catId]) {
        statsMap[catId] = {
          category: await Category.findById(catId),
          attempts: 0,
          completed: 0,
          totalScore: 0,
          lastAttempt: attempt.completedAt,
        };
      }

      statsMap[catId].attempts += 1;
      statsMap[catId].completed += 1;
      statsMap[catId].totalScore += attempt.score;

      if (new Date(attempt.completedAt) > new Date(statsMap[catId].lastAttempt)) {
        statsMap[catId].lastAttempt = attempt.completedAt;
      }
    }

    const categoryStats = Object.entries(statsMap).map(([categoryId, data]) => ({
      id: categoryId,
      category: data.category,
      attempts: data.attempts,
      completed: data.completed,
      averageScore: data.totalScore / data.completed,
      lastAttempt: data.lastAttempt,
    }));

    res.status(200).json({ categoryStats });
  } catch (err) {
    console.error("❌ Error in /user/:userId/stats", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;
