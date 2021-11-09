import { ADD_ITEM, REMOVE_ITEM, CLEAR, IS_IN_CART } from "./types";

export default (state, action) => {
    const {payload, type} = action;

    switch(type){
        case ADD_ITEM:
            const item = {
                item: payload.item,
                quantity: payload.quantity
            }    
            return {
                ...state,
                cart: state.cart.push(item)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.itemId)
            }
        case CLEAR:
            return {
                ...state,
                cart: []
            }
        case IS_IN_CART:
            const ret = state.cart.includes(item => item.id === payload.itemId)
            return ret;
        default:
            return state;
    }
}