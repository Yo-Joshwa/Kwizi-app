import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
function homePage() {
  const { categories, loading } = useGlobalContext();
  const navigate = useNavigate();
  if (loading) return <p>Loading...</p>;

  return (
    <div className="ml-[14%] mt-[1.5%]">
      <h1 className="text-3xl ">Quiz Catalog:</h1>
      <div className=" min-w-max mr-[14%] mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9">
        {categories.map((category) => (
          <div
            className="border-1 shadow-lg shadow-black/20 rounded-xl p-1 cursor-pointer
                  hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            onClick={() => navigate(`/categories/${category.id}`)}
          >
            <div className="rounded-xl h-[9rem] py-1">
              <img
                src={
                  category.image
                    ? category.image
                    : `/categories/image--${category.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}.svg`
                }
                width={300}
                height={200}
                alt={category.name}
                className="h-full rounded-xl"
              />
            </div>

            <div className="py-4 px-4 flex flex-col gap-4">
              <div>
                <h2 className="text-xl mb-2">{category.name}</h2>
                <p className="text-gray-600 text-sm leading-none ">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default homePage;
