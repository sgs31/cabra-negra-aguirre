import { useContext} from "react"
import CartFilled from "./CartFilled"
import CartEmpty from "./CartEmpty"
import CartContext from "../context/cart/CartContext"

const Cart = () => {

    const { cart, clear } = useContext(CartContext)

    const isEmptyCart = cart.length === 0;

    return isEmptyCart ? <CartEmpty /> : <CartFilled cart={cart} util={clear} />
}

export default Cart;


