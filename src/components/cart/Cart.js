import { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import CartContext from "../context/cart/CartContext"
import CartItem from './CartItem'
import './styles/Cart.css'

const Cart = () => {

    const { cart } = useContext(CartContext)

    const isEmptyCart = cart.length === 0;

    return isEmptyCart ? <EmptyCart /> : <CartFilled cart={cart} />
}

const EmptyCart = () => {

    const { push } = useHistory()

    return (
        <div className="empty-cart">
            <h2>No hay productos en el carrito</h2>
            <button onClick={(() => push("./"))}>IR A LA TIENDA</button>
        </div>
    )
}

const CartFilled = ({ cart }) => {
    
    const units = () => {
        let unitsInCart = 0;
        cart.map(item => unitsInCart+= item.quantity)
        return unitsInCart;
    }
    const total = () => {
        let totalPrice = 0;
        cart.map(item => totalPrice+= (item.product.price * item.quantity))
        return totalPrice;
    }
    
    return (
        <div className="cart-filled">
            <div className="cart-filled-list">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => <CartItem key={item?.product.id} item={item} />)}
                    </tbody>
                </table>
            </div>
            <div className="cart-filled-information">
                <h3>Informacion general</h3>
                <p>Cantidad de unidades: {units()}</p>
                <p>Precio total: ${total()}</p>
                <button>FINALIZAR COMPRA</button>
            </div>
        </div>
    )
}

export default Cart;
