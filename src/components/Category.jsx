import React from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
const Category = ({ categories }) => {
  const { categoryId } = useParams();

  // Filter the categories based on the categoryId from the URL parameters
  const selectedCategory = categoryId
    ? categories.find((category) => category.idCategory === categoryId)
    : null;

  return (
    <>
      <div className="my-4 max-w-screen-xl mx-auto flex flex-wrap lg:justify-center justify-center">
        {selectedCategory ? (
          <>
            <div
              className="w-full bg-white p-3 m-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={selectedCategory.idCategory}
            >
              <img
                className="rounded-t-lg h-64 w-96"
                src={selectedCategory.strCategoryThumb}
                alt={selectedCategory.strCategory}
               
              />
              <div className="p-5">
                <strong className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {selectedCategory.strCategory}
                </strong>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {selectedCategory.strCategoryDescription}
                </p>
              </div>
            </div>

            <FoodCard category={selectedCategory.strCategory} />
          </>
        ) : (
          // Display all categories if no specific category is selected
          categories.map((category) => (
            <div
              className="max-w-sm bg-white flex flex-col p-3 m-4  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={category.idCategory}
            >
              <img
                className="rounded-t-lg h-64 w-96"
                src={category.strCategoryThumb}
                alt={category.strCategory}
              />
              <div className="p-5">
                <strong className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {category.strCategory}
                </strong>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {category.strCategoryDescription}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Category;
