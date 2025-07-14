import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useGlobalContext } from "../../context/globalContext";
import { flag, next } from "../../utils/Icons";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

function QuizPage() {
  const { user } = useUser();
  const {
    selectedQuiz,
    quizSetup,
    setQuizSetup,
    setQuizResponses,
    filteredQuestions,
  } = useGlobalContext();

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [responses, setResponses] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    if (!selectedQuiz) {
      navigate("/");
      return;
    }

    const allQuestions = filteredQuestions.slice(0, quizSetup?.questionCount);
    setShuffledQuestions(shuffleArray([...allQuestions]));
  }, [selectedQuiz, quizSetup, filteredQuestions]);

  useEffect(() => {
    if (shuffledQuestions[currentIndex]) {
      setShuffledOptions(
        shuffleArray([...shuffledQuestions[currentIndex].options])
      );
    }
  }, [shuffledQuestions, currentIndex]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; --i) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleActiveQuestion = (option) => {
    if (!shuffledQuestions[currentIndex]) return;

    const response = {
      questionId: shuffledQuestions[currentIndex].id,
      optionId: option.id,
      isCorrect: option.isCorrect,
    };

    setResponses((prev) => {
      const existingIndex = prev.findIndex(
        (res) => res.questionId === response.questionId
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex] = response;
        return updated;
      }

      return [...prev, response];
    });

    setActiveQuestion(option);
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setActiveQuestion(null);
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = async () => {
    const fullResponses = shuffledQuestions.map((question) => {
      const answered = responses.find((r) => r.questionId === question.id);
      return (
        answered || {
          questionId: question.id,
          optionId: null,
          isCorrect: false,
        }
      );
    });

    const score = fullResponses.filter((res) => res.isCorrect).length;

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/user/quiz/finish`, {
        userId: user?.id,
        categoryId: selectedQuiz.categoryId,
        quizId: selectedQuiz._id,
        score,
        correctAnswers: score,
        totalQuestions: fullResponses.length,
        responses: fullResponses,
      });

      setQuizResponses(fullResponses);
      setQuizSetup({ questionCount: 1, category: null, difficulty: null });
      navigate("/results");
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (!selectedQuiz) return null;

  return (
    <div className="pmax-w-xl mx-auto mt-[2rem] ml-[14%] mr-[14%]  p-6 border-1 rounded-xl shadow">
      {shuffledQuestions[currentIndex] ? (
        <div className="space-y-6">
          <div className="flex flex-col gap-2 textAlign-center">
            <p className="py-3 px-2 border-1 text-xl self-start rounded-lg shadow">
              Question: {currentIndex + 1} /{" "}
              <span className="text-xl">{shuffledQuestions.length}</span>
            </p>
            <h1 className="mt-2 px-2 text-2xl font-bold">
              {shuffledQuestions[currentIndex].text}
            </h1>
          </div>

          <div className="pt-5 space-y-4">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleActiveQuestion(option)}
                className={`relative group py-3 w-full text-center border-1 text-lg font-semibold rounded-lg
                  hover:bg-[rgba(0,0,0,0.05)] transition-all duration-200 ease-in-out
                  ${
                    option.text === activeQuestion?.text
                      ? "bg-green-100 border-green-500 shadow hover:border-green-500"
                      : "shadow"
                  }`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-lg">No questions found for this quiz</p>
      )}

      <div className="w-full py-5 mt-5 flex items-center justify-center bg-white">
        <Button
          className="px-10 py-6 cursor-pointer font-bold border-1 text-black text-xl rounded-xl hover:bg-sky-50"
          variant={"green"}
          onClick={() => {
            if (currentIndex < shuffledQuestions.length - 1) {
              handleNextQuestion();
            } else {
              handleFinishQuiz();
            }
          }}
        >
          {currentIndex < shuffledQuestions.length - 1 ? (
            <span className="flex items-center gap-2">{next} Next</span>
          ) : (
            <span className="flex items-center gap-2">{flag} Finish</span>
          )}
        </Button>
      </div>
    </div>
  );
}

export default QuizPage;
