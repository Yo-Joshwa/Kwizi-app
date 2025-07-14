import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { userId, name, email } = req.body;

  try {
    const existingUser = await User.findOne({ userId });
    if (existingUser) return res.status(200).json(existingUser);

    const newUser = new User({ userId, name, email });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ message: "Failed to register user" });
  }
});



export default router;
