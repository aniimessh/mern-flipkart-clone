import axios from "axios";
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } from "../constants/productConstant";

const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    console.log("Data Is Fetched");
    dispatch({ type:GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type:GET_PRODUCTS_FAIL, payload: err.message });
  }
};
