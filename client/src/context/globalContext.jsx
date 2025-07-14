import React, { createContext, useContext, useEffect, useState } from "react";
import useCategories from "../hooks/useCategories";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const { loading, categories } = useCategories();
  const { user, isLoaded} = useUser();

  const [quizSetup, setQuizSetup] = useState({
    questionCount: 1,
    category: null,
    difficulty: null,
  });

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizResponses, setQuizResponses] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const registerUser = async () => {
      if (!isLoaded || !user) return;
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/user/register`, {
          userId: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
        });
      } catch (err) {
        console.error("Registration failed", err);
      }
    };

    registerUser();
  }, [[isLoaded, user]]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        categories,
        quizSetup,
        setQuizSetup,
        selectedQuiz,
        setSelectedQuiz,
        quizResponses,
        setQuizResponses,
        filteredQuestions,
        setFilteredQuestions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
