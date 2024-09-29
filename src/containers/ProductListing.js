import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setCategories } from "../redux/actions/productsActions"; 
import ProductComponent from "./ProductComponent";

const ProductListing = ({ searchTerm }) => {  // Accept searchTerm as a prop
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.allProducts.products);
  const selectedCategory = useSelector((state) => state.allProducts.selectedCategory);
  const dispatch = useDispatch();

  const productsPerPage = 10;

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    
    dispatch(setProducts(response.data));

    const uniqueCategories = [...new Set(response.data.map(product => product.category))];
    dispatch(setCategories(uniqueCategories)); 
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products based on selected category and search term
  const filteredProducts = products.filter(product => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()); // Use searchTerm passed as prop
    return matchCategory && matchSearch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="ui grid container">
      <ProductComponent products={currentProducts} />

      {/* Pagination Controls */}
      <div>
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductListing;
