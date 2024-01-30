import * as actionTypes from '../constants/cartConstant';
import axios from 'axios';

// const URL  = "mern-flipkart-clone-backend.vercel.app"

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    console.log(id)
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};
