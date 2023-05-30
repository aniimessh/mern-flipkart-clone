import axios from "axios"
import * as actionTypes from "../constants/productConstant.js"

const URL = `http://localhost:8000`;

export const getProducts = () => async (dispatch) => {
    try{    
        const {data} = await axios.get(`${URL}/products`);
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data})
    }catch(err){
        console.log("Error while calling getProducts api");
        console.log(err.message);
        dispatch({type:actionTypes.GET_PRODUCTS_FAILURE, payload:err.message})
    }
}