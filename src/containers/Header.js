import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/actions/productsActions";
import CategorySelector from "./CategorySelector";

const Header = ({ setSearchTerm }) => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState(""); // State for search input

  const handleTitleClick = () => {
    dispatch(setSelectedCategory(null)); // Reset the selected category
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value); // Update local search state
    setSearchTerm(e.target.value); // Update parent component's search state
  };

  return (
    <div className="ui fixed menu">
      <div
        className="ui container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black" }}
          onClick={handleTitleClick}
        >
          <h2 style={{ marginRight: "20px" }}>productShop</h2>
        </Link>

        {/* Search Bar */}
        <div style={{ flexGrow: 1, textAlign: "center" }}>
          <div className="ui input" style={{ width: "50%" }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={handleSearch}
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div style={{ marginLeft: "auto" }}>
          <CategorySelector />
        </div>
      </div>
    </div>
  );
};

export default Header;
