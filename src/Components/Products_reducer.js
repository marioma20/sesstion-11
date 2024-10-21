
import { GET_PRODUCT, ADD_PRODUCT } from "./Action_products";

export const productsReducer = (state=[], action)=>{
    switch(action.type){
        case GET_PRODUCT:
            // console.log(...action.payload)
            return [ ...action.payload ];
        case ADD_PRODUCT:
            return [...state, action.payload];
        default:
            return state;

    }

}