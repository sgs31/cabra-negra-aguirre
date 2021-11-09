import { useReducer } from "react"
import CartContext from "./CartContext"
import CartReducer from "./CartReducer"
import {ADD_ITEM, REMOVE_ITEM, CLEAR, IS_IN_CART} from './types'


const CartState = (props) => {
    const initialState = {
        cart: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addItem = (item, quantity) => {
        dispatch({
            type: ADD_ITEM,
            payload: {item, quantity}
        })
    }

    const removeItem = (itemId) =>{
        dispatch({
            type: REMOVE_ITEM,
            payload: itemId
        })
    }

    const clear = () =>{
        dispatch({
            type: CLEAR
        })
    }

    const isInCart = (itemId) =>{
        dispatch({
            type: IS_IN_CART,
            payload:itemId
        })
    }

    return (
        <CartContext.Provider value={{
            cart: initialState.cart,
            addItem,
            removeItem,
            clear,
            isInCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;