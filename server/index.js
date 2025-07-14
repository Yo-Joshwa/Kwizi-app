import dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userStatsRoutes from "./routes/userStatsRoutes.js";
import userRoutes from "./routes/user.js";
import categoriesRoutes from "./routes/categories.js";
import clerkWebhook from "./routes/clerkWebhook.js";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import protectedRoutes from "./routes/protected.js";
import quizRoutes from "./routes/quiz.js";
import userQuizRoutes from "./routes/userQuizRoutes.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [process.env.CLIENT_URL];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    allowedHeaders: [
      "x-user-id",
      "Access-Control-Allow-Origin",
      "Content-Type",
      "Authorization",
    ],
    credentials: true,
  })
);
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use("/api/user", userRoutes);
app.use("/api/user", userQuizRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/categories", quizRoutes);
app.use("/api", userStatsRoutes);
app.use("/api", clerkWebhook);
app.use(
  ClerkExpressWithAuth({
    secretKey: process.env.CLERK_SECRET_KEY,
  })
);
app.use("/api", protectedRoutes);

app.listen(5000, () => console.log(`Server is now running on port ${PORT}`));
