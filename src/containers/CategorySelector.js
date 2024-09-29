import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../redux/actions/productsActions";

const CategorySelector = () => {
  const categories = useSelector((state) => state.allProducts.categories);
  const dispatch = useDispatch();
  
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
    setIsOpen(false); // Close dropdown after selecting a category
  };

  return (
    <div className="category-selector">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Select a Category
      </button>
      {isOpen && (
        <div className="category-dropdown">
          {categories.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelector;
