import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  categories: [],
  selectedCategory: null,
  searchQuery: "", // Added searchQuery to the initial state
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload };
    case ActionTypes.SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: payload };
    case ActionTypes.SET_SEARCH_QUERY: // New case for handling the search query
      return { ...state, searchQuery: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
