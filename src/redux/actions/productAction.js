import axios from "axios";
import * as actionTypes from "../constants/productConstant";

const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    console.log("Data Is Fetched");
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, products: data });
  } catch (err) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, products: err.message });
  }
};
