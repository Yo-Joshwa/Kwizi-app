import express from "express"
const router = express.Router();

router.get("/", (req, res) => {
  const categories = [
    {
      id: "685fa668016034e0109bf4cc",
      name: "Science",
      description:
        "Explores the wonders of science.",
    },
    {
      name: "Technology",
      id: "685fa668016034e0109bf4cd",
      description: "Dive into the latest technological advancements.",
    },
    {
      name: "Programming",
      id: "685fa668016034e0109bf4ce",
      description: "Learn about coding and software development.",
    },
    {
      name: "Computer Science",
      id: "685fa668016034e0109bf4cf",
      description: "Understand the fundamentals of computers and algorithms.",
    },
    {
      name: "Mathematics",
      id: "685fa668016034e0109bf4d0",
      description: "Master the language of numbers and patterns.",
    },
    {
      name: "History",
      id: "685fa668016034e0109bf4d1",
      description: "Discover the events that shaped our world.",
    },
    {
      name: "Art",
      id: "685fa668016034e0109bf4d2",
      description: "Appreciate creativity through various forms of art.",
    },
    {
      name: "Geography",
      id: "685fa668016034e0109bf4d3",
      description: "Explore the physical features of our planet.",
    },
    {
      name: "Physics",
      id: "685fa668016034e0109bf4d4",
      description: "Unravel the laws governing the universe.",
    },
    { name: "Chemistry",
      id: "685fa668016034e0109bf4d5",
      description: "Test your knowledge of chemistry.",
    },
    { name: "Biology",
      id: "685fa668016034e0109bf4d6",
      description: "Study the science of living organisms.",
    },
  ];
  res.json(categories);
});

export default router;
