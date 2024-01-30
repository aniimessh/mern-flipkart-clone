import axios from "axios";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
} from "../constants/productConstant";

const URL = "mern-flipkart-clone-backend.vercel.app";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    console.log("Data Is Fetched");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCT_DETAILS_FAIL, payload: err.message });
  }
};
