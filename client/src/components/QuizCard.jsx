import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { dots } from "../utils/Icons";

function QuizCard({ quiz }) {
  const navigate = useNavigate();
  const { setSelectedQuiz } = useGlobalContext();

  const handleClick = () => {
    setSelectedQuiz(quiz);
    localStorage.setItem("selectedQuiz", JSON.stringify(quiz));
    navigate(`/quiz/setup/${quiz._id}`);
  };

  return (
    <div
      className="border-1 rounded-xl p-1 cursor-pointer shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-transform duration-300 ease-in-out"
      onClick={handleClick}
    >
      <div className="py-2 px-6 flex flex-col gap-4">
        <div className="rounded-xl h-[16rem] py-1 bg-[#97dbff]/20">
          <img
            src={
              quiz.image
                ? quiz.image
                : `/categories/image--${quiz.title
                    .toLowerCase()
                    .split(" ")
                    .join("-")}.svg`
            }
            alt="quiz"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold">{quiz.title}</h2>
          <p className="text-gray-600 leading-none font-semibold">
            {quiz.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-400 font-semibold text-sm flex items-center gap-2 leading-none">
            <span className="text-xl">{dots}</span>
            <span>
              Total Questions:{" "}
              <span className="font-bold text-gray-600">
                {quiz.questions.length}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
