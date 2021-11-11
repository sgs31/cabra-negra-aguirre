import { useState, useMemo } from "react"
import CartContext from "./CartContext"

const CartState = (props) => {
    
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart([...cart, {product:item, quantity: quantity}])
        }
    }

    const removeItem = (itemId) =>{
        setCart([ ...cart.filter(item => item.product.id !== itemId) ])
    }

    const clear = () =>{
       setCart([])
    }

    const isInCart = (itemId) =>{
        const itemToFind = cart.find(item => item.product.id === itemId)
        return itemToFind ? true : false
    }

    const value = useMemo(() => {
        return({
                cart,
                addItem,
                removeItem,
                clear,
                isInCart
            })
    }, [cart])

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;