import { useContext } from "react"
import { useHistory } from "react-router"
import CartContext from "../context/cart/CartContext"
import CartItem from './CartItem'
import './styles/Cart.css'

const Cart = () => {
    const {cart} = useContext(CartContext)
    const isEmptyCart = cart.length === 0
    
    return isEmptyCart ? <EmptyCart/> : <CartFilled cart={cart}/>
}

const EmptyCart = () => {
    
    const {push} = useHistory()

    return (
        <div className="empty-cart">
            <h2>No hay productos en el carrito</h2>
            <button onClick={(()=> push("./") )}>IR A LA TIENDA</button>
        </div>
    )
}

const CartFilled = ({cart}) => {
    return (
        <div className="cart-filled">
            <div className="cart-filled-list">
            <ul>
            {cart.map(item => <CartItem item={item}/>)}

            </ul>
            </div>
            <div className="cart-filled-information">
                <h3>Informacion general</h3>
                <p>Cantidad de unidades:</p>
                <p>Precio total:</p>
                <button>Comprar ahora</button>
            </div>
        </div> 
    )
} 

export default Cart;
