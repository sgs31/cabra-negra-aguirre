import { useContext} from "react"
import CartFilled from "./CartFilled"
import CartEmpty from "./CartEmpty"
import CartContext from "../context/cart/CartContext"

const Cart = () => {

    const { cart, clear, isEmpty } = useContext(CartContext)

    return isEmpty() ? <CartEmpty /> : <CartFilled cart={cart} clear={clear} />
}

export default Cart;


