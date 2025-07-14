import Quiz from "../models/Quiz.js";

export const getQuizzesByCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    const quizzes = await Quiz.find({ categoryId }); 
    res.json({ quizzes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching quizzes" });
  }
};
