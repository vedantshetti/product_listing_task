import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedCategory } from "../redux/actions/productsActions";

const CategorySelector = () => {
  const categories = useSelector((state) => state.allProducts.categories);
  const dispatch = useDispatch();
  
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="category-selector">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Select a Category
      </button>
      {isOpen && (
        <div className="category-dropdown">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={`/category/${category}`} // Link to the category route
              className="category-button"
              onClick={() => {
                dispatch(setSelectedCategory(category)); // Optionally keep track of selected category
                setIsOpen(false); // Close dropdown after selecting a category
              }}
            >
              {category}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelector;
