import express from "express";

const router = express.Router();

router.get("/some-protected-route", (req, res) => {
  const userId = req.auth?.userId;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.json({ message: "User is authenticated", userId });
});

export default router;
