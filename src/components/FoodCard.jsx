import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodCard = ({ category }) => {
  const [foodItems, setFoodItems] = useState([]);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setFoodItems(response.data.meals);
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };
  
  useEffect(() => {
    fetchFoodItems();
  }, [category]);

  return (
    <div className="w-full overflow-hidden flex flex-wrap gap-2 justify-center">
      {foodItems.map((foodItem) => (
        <div
          key={foodItem.idMeal}
          className="lg:max-w-sm rounded overflow-hidden shadow-lg cursor-pointer w-84 h-auto bg-zinc-800 text-gray-50 p-5"
        >
          <div className="hover:scale-105 w-full h-50 duration-500 overflow-hidden transition-all ease-in-out">
            <img
              className="object-fit object-cover w-full h-full rounded-full"
              src={foodItem.strMealThumb}
              alt={foodItem.strMeal}
            />
            <span className="text-sm text-center font-bold leading-4 lg:mt-3 mt-3">{foodItem.strMeal}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
