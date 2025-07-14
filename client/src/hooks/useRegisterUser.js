import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import axios from "axios";

const useRegisterUser = () => {
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;

    const registerUser = async () => {
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/user/register`, {
          userId: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
        });
      } catch (error) {
        console.error("User registration failed:", error);
      }
    };

    registerUser();
  }, [user]);
};

export default useRegisterUser;
