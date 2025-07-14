import mongoose from "mongoose";
import dotenv from "dotenv";
import Quiz from "../models/Quiz.js";
import Category from "../models/Category.js";

dotenv.config();

const quizzes = [
  {
    title: "Basic Science Quiz",
    description: "Explore the fundamentals of general science.",
    categoryName: "Science",
  },
  {
    title: "Human Body Systems",
    description: "Test your understanding of human anatomy and physiology.",
    categoryName: "Science",
  },
  {
    title: "Tech Innovations",
    description: "Discover the latest in modern technology and inventions.",
    categoryName: "Technology",
  },
  {
    title: "Internet & Web Basics",
    description: "Understand the technologies powering the web.",
    categoryName: "Technology",
  },
  {
    title: "Algebra Essentials",
    description: "Check your skills in algebraic expressions and equations.",
    categoryName: "Mathematics",
  },
  {
    title: "Geometry Basics",
    description: "Explore shapes, angles, and properties in geometry.",
    categoryName: "Mathematics",
  },
  {
    title: "World War Facts",
    description: "Test your knowledge about World Wars I and II.",
    categoryName: "History",
  },
  {
    title: "Ancient Civilizations",
    description: "Learn about the cultures that shaped the ancient world.",
    categoryName: "History",
  },
  {
    title: "Art Movements",
    description: "Identify key art movements and their characteristics.",
    categoryName: "Art",
  },
  {
    title: "Famous Artists",
    description: "Test your knowledge of renowned painters and sculptors.",
    categoryName: "Art",
  },
  {
    title: "World Capitals",
    description: "Match countries with their capital cities.",
    categoryName: "Geography",
  },
  {
    title: "Continents & Oceans",
    description: "Explore the physical features of Earth's surface.",
    categoryName: "Geography",
  },
  {
    title: "JavaScript Basics",
    description:
      "Test your understanding of JavaScript fundamentals, syntax, and concepts.",
    categoryName: "Programming",
  },
  {
    title: "Computer Science Basics",
    description: "A quiz about fundamental computer science concepts.",
    categoryName: "Computer Science",
  },
  {
    title: "Programming Fundamentals",
    description: "Test your knowledge of basic programming concepts.",
    categoryName: "Programming",
  },
  {
    title: "Data Structures",
    description: "Assess your understanding of data structures.",
    categoryName: "Computer Science",
  },
  {
    title: "Physics",
    description: "Test your knowledge of physics.",
    categoryName: "Physics",
  },
  {
    title: "Chemistry",
    description: "Test your knowledge of chemistry.",
    categoryName: "Chemistry",
  },
  {
    title: "Biology",
    description: "Test your knowledge of biology.",
    categoryName: "Biology",
  },
];

async function seedQuizzes() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("🔗 Connected to MongoDB");

    await Quiz.deleteMany(); // optional: clear old data

    for (const quiz of quizzes) {
      const category = await Category.findOne({ name: quiz.categoryName });

      if (!category) {
        console.warn(`⚠️ Category not found: ${quiz.categoryName}`);
        continue;
      }

      const newQuiz = new Quiz({
        title: quiz.title,
        description: quiz.description,
        categoryId: category._id,
        questions: [], // empty for now
      });

      await newQuiz.save();
      console.log(`✅ Created quiz: ${newQuiz.title}`);
    }

    mongoose.connection.close();
    console.log("🌱 Quiz seeding complete.");
  } catch (err) {
    console.error("❌ Seeding error:", err);
    mongoose.connection.close();
  }
}

seedQuizzes();
