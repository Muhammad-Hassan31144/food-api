import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Card = ({ category }) => {
  const [foodItems, setFoodItems] = useState([]);

  
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        setFoodItems(response.data.meals);
        console.log(response.data.meals)
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };
    useEffect(() => {
        fetchFoodItems();
      }, [category]);

  return (
    <div className="d-inline-block">
      {foodItems.map((foodItem) => (
        <div key={foodItem.idMeal} className="card text-bg-dark m-2 d-inline-block" style={{ width: '18rem' }}>
          <img
            src={foodItem.strMealThumb}
            className="card-img-top"
            alt={foodItem.strMeal}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <div className="card-body">
            <h5 className="card-title">{foodItem.strMeal}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
