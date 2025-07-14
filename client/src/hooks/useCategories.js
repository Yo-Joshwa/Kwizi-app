import { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/categories`);
        setCategories(res.data);
        return res.data;
      } catch (err) {
        console.error("Error fetching categories", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { loading, categories };
};

export default useCategories;
