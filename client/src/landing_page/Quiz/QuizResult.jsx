import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { play } from "../../utils/Icons";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

function QuizResult() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchResult() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/quiz/latest/${user.id}`);
        setResult(res.data);
      } catch (error) {
        console.error("Failed to fetch quiz result", error);
        navigate("/"); 
      }
    }

    if (user?.id) {
      fetchResult();
    }
  }, [user]);

  if (!result)
    return <p className="text-center text-lg mt-10">Loading result...</p>;
  // console.log(result,"result");
  const { correctAnswers, totalQuestions } = result;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  let message = "";
  if (scorePercentage < 25) {
    message = "You need to try harder!";
  } else if (scorePercentage < 50) {
    message = "You're getting there! Keep practicing.";
  } else if (scorePercentage < 75) {
    message = "Good effort! You're above average.";
  } else if (scorePercentage < 100) {
    message = "Great job! You're so close to perfect!";
  } else {
    message = "Outstanding! You got everything right!";
  }

  return (
    <div className="py-20 flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-center">Quiz Results</h1>

      <p className="text-2xl text-center mt-4">
        You scored <span className="font-bold">{correctAnswers}</span> out of{" "}
        <span className="font-bold text-3xl">{totalQuestions}</span>
      </p>

      <p className="text-blue-400 font-bold text-4xl text-center">
        {scorePercentage.toFixed()}%
      </p>

      <p className="text-2xl text-center mt-2 font-semibold">{message}</p>

      <div className="flex justify-center mt-8">
        <Button
          variant={"green"}
          className="px-10 py-6 font-bold cursor-pointer border-1 text-black text-xl rounded-xl"
          onClick={() => navigate(`/quiz/setup/${result.quizId}`)}
        >
          {play} Play Again
        </Button>
      </div>
    </div>
  );
}

export default QuizResult;
