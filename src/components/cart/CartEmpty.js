import { useHistory } from "react-router";
import './styles/CartEmpty.css'

const CartEmpty = () => {

    const { push } = useHistory()

    return (
        <div className="cart-empty">
            <h2>No hay productos en el carrito</h2>
            <button onClick={(() => push("./shop"))}>IR A LA TIENDA</button>
        </div>
    )
}

export default CartEmpty;