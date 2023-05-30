import React from "react";
import * as actionType from "../constants/productConstant.js";

function getProductsReducers(state = {products: []}, action) {
  switch (action.type) {
    case actionType.GET_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionType.GET_PRODUCTS_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
}

export default getProductsReducers;
