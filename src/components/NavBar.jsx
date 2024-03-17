import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ categories }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showForwardButton, setShowForwardButton] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const sections = Math.ceil(categories.length / 8);

  const handleNextSection = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % sections);
  };

  useEffect(() => {
    setShowForwardButton(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setCurrentSection(0); // Reset current section when categories change
  }, [categories]);

  return (
    <div className="flex flex-col w-full md:flex-col bg-gray-800 text-white relative">
      <button
        className="md:hidden px-4 py-3 m-1 bg-gray-200 text-gray-800 self-start"
        onClick={toggleMenu}
      >
        {/* SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>

        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
      </button>

      {/* Forward Arrow Icon */}
      {showForwardButton && (
        <button onClick={handleNextSection} className="absolute top-0 rounded-lg right-2 z-10 px-4 py-3 m-1 bg-gray-400 text-gray-800 self-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white transform transition-transform duration-300 ease-in-out rotate-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:w-full bg-gray-800 border-b-2 border-red-300 lg:h-28 flex-wrap justify-center gap-2 items-center`}
      >
        <li className="py-1 mx-1 max-md:mx-3 max-w-none max-md:w-5/6">
          <Link 
              className="px-3 py-2 bg-gray-700 mt-1 rounded-lg text-white block hover:bg-gray-600"
            onClick={()=>(setMenuOpen(false))}
            to="/categories">
            ALL Categories
          </Link>
        </li>
        {categories.slice(currentSection * 8, currentSection * 8 + 8).map((category) => (
          <li className="py-1 mx-1 max-md:mx-3 max-w-none max-md:w-5/6" key={category.idCategory}>
            <Link
              className="px-3 py-2 bg-gray-700 mt-1 rounded-lg text-white block hover:bg-gray-600"
              to={`/categories/${category.idCategory}`}
            onClick={()=>(setMenuOpen(false))}

            >
              {category.strCategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
