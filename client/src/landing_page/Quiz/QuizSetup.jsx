import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useGlobalContext } from "../../context/globalContext";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { play } from "../../utils/Icons";

const QuizSetupPage = () => {
  const {id} = useParams();

  const navigate = useNavigate();
  const { quizSetup, setQuizSetup, selectedQuiz, setSelectedQuiz, setFilteredQuestions } =
    useGlobalContext();

  const [localQuestionCount, setLocalQuestionCount] = useState(
    quizSetup?.questionCount || 1
  );

  useEffect(() => {
  if (!selectedQuiz) {
    const storedQuiz = localStorage.getItem("selectedQuiz");
    if (storedQuiz) {
      const parsed = JSON.parse(storedQuiz);
      if (parsed?._id === id) {
        setSelectedQuiz(parsed);
      } else {
        navigate("/"); 
      }
    } else {
      navigate("/");
    }
  }
}, [selectedQuiz]);

  useEffect(() => {
    const filtered = selectedQuiz?.questions?.filter((q) => {
      return (
        !quizSetup?.difficulty ||
        quizSetup?.difficulty === "unspecified" ||
        q?.difficulty?.toLowerCase() === quizSetup?.difficulty?.toLowerCase()
      );
    });

    setFilteredQuestions(filtered);
  }, [quizSetup]);

  const handleQuestionChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const maxQuestions = selectedQuiz?.questions.length || 1;
    const newCount =
      isNaN(value) || value < 1 ? 1 : Math.min(value, maxQuestions);

    setLocalQuestionCount(newCount);
    setQuizSetup((prev) => ({ ...prev, questionCount: newCount }));
  };

  const handleDifficultyChange = (difficulty) => {
    setQuizSetup((prev) => ({ ...prev, difficulty }));
  };

  const startQuiz = async () => {
    const selectedQuestions = selectedQuiz?.questions
      .slice(0, quizSetup?.questionCount)
      .filter((q) => {
        return (
          quizSetup?.difficulty === "unspecified" ||
          !quizSetup?.difficulty ||
          q.difficulty?.toLowerCase() === quizSetup?.difficulty?.toLowerCase()
        );
      });

    if (selectedQuestions.length > 0) {
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/user/quiz/start`, {
          categoryId: selectedQuiz?.categoryId,
          quizId: selectedQuiz?._id,
        });
      } catch (error) {
        console.log("Error starting quiz: ", error);
      }

      navigate("/quiz");
    } else {
      toast.error("No questions found for the selected criteria");
    }
  };

  return (
    <div>
      <div className="pmax-w-xl mx-auto mt-[2rem] ml-[14%] mr-[14%]  p-6 border-1 rounded-xl shadow">
        <h1 className="text-4xl font-bold mb-4">Quiz Setup</h1>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="questionCount" className="text-lg">
              Number of Questions
            </Label>
            <Input
              type="number"
              min={1}
              id="questionCount"
              value={localQuestionCount}
              onChange={handleQuestionChange}
              max={selectedQuiz?.questions?.length}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="text-lg">
              Category
            </Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder={selectedQuiz?.title || "Category"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Knowledge</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty" className="text-lg">
              Difficulty
            </Label>
            <Select
              defaultValue="unspecified"
              onValueChange={(value) => handleDifficultyChange(value)}
            >
              <SelectTrigger id="difficulty">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="unspecified">Unspecified</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="w-full py-5 flex items-center justify-center bg-white  mt-4">
        <Button
          variant={"blue"}
          className="px-10 py-6 cursor-pointer font-bold text-black border-1 text-xl rounded-xl hover:bg-sky-200"
          onClick={startQuiz}
        >
          <span className="flex items-center gap-2">{play} Start</span>
        </Button>
      </div>
    </div>
  );
};

export default QuizSetupPage;
