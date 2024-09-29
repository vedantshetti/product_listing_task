import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setCategories = (categories) => { // New action
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

export const setSelectedCategory = (category) => { // New action
  return {
    type: ActionTypes.SET_SELECTED_CATEGORY,
    payload: category,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const setSearchQuery = (query) => {
  return {
    type: ActionTypes.SET_SEARCH_QUERY,
    payload: query,
  };
};
