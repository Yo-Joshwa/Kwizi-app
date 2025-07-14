import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "../models/Category.js";

dotenv.config();
const categories = [
  {
    name: "Science",
    description: "Explores the wonders of science.",
  },
  {
    name: "Technology",
    description: "Dive into the latest technological advancements.",
  },
  {
    name: "Programming",
    description: "Learn about coding and software development.",
  },
  {
    name: "Computer Science",
    description: "Understand the fundamentals of computers and algorithms.",
  },
  {
    name: "Mathematics",
    description: "Master the language of numbers and patterns.",
  },
  {
    name: "History",
    description: "Discover the events that shaped our world.",
  },
  {
    name: "Art",
    description: "Appreciate creativity through various forms of art.",
  },
  {
    name: "Geography",
    description: "Explore the physical features of our planet.",
  },
  {
    name: "Physics",
    description: "Unravel the laws governing the universe.",
  },
  {
    name: "Chemistry",
    description: "Test your knowledge of chemistry.",
  },
  {
    name: "Biology",
    description: "Study the science of living organisms.",
  },
];

async function seedCategories() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    await Category.deleteMany(); // optional: clear old data
    const inserted = await Category.insertMany(categories);
    console.log(`✅ Inserted ${inserted.length} categories`);

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding categories:", err);
    mongoose.connection.close();
  }
}

seedCategories();
