import {ActionTypes} from "../constants/action-type"

// setproduct
export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}

// selected project 
export const selectedProducts=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    }
}
