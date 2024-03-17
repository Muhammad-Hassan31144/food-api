import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Category from "./components/Category";

function App() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = response.data.categories;
      setCategories(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Router>
      <div className="border border-blue-600 bg-black">
        <NavBar categories={categories} />
        <Routes>
          <Route
            path="/categories"
            element={<Category categories={categories} />}
          />
          <Route
            path="/categories/:categoryId"
            element={<Category categories={categories} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
