import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QuizCard from "../../components/QuizCard";
import Countdown from "../../components/Countdown";
import {useUser} from "@clerk/clerk-react";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [rateLimitTimeLeft, setRateLimitTimeLeft] = useState(null);
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/categories/${categoryId}/quizzes`, {
          headers: {
            "x-user-id": user.id, 
          },
        });
        console.log(res.data, "data of quiz");
        setQuizzes(res.data.quizzes);
      } catch (err) {
        if (
          err.response &&
          err.response.status === 429 &&
          err.response.data?.resetTime
        ) {
          const resetTime = new Date(err.response.data.resetTime).getTime();
          const now = Date.now();
          const timeLeft = Math.max(Math.ceil((resetTime - now) / 1000), 0);
          setRateLimitTimeLeft(timeLeft);
        } else {
          console.error("Failed to fetch quizzes:", err);
        }
      }
    };

    fetchQuizzes();
  }, [categoryId, isLoaded, isSignedIn, user]);

  if (rateLimitTimeLeft !== null) {
    return (
      <div className="flex flex-col items-center gap-2 mt-10">
        <h1 className="text-4xl font-bold text-center text-red-500">
          Too many requests :(
        </h1>
        <p>You have exceeded the rate limit for this request.</p>
        <Countdown intitialTimeLeft={rateLimitTimeLeft} />
      </div>
    );
  }
  if (!isLoaded) {
  return <p className="text-center text-lg mt-10">Loading quizzes...</p>;
}
    // console.log(quizzes, "quizzes");

  return (
    <div className="px-4 py-6">
      <h1 className="mb-6 text-4xl font-bold">All Quizzes</h1>
      {quizzes.length > 0 ? (
        <div className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl text-center mt-4">
          No quizzes found for this Category
        </h1>
      )}
    </div>
  );
};

export default CategoryPage;
