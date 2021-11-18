import { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import './styles/CartItem.css'

const CartItem = ({ item }) => {

    const {removeItem} = useContext(CartContext)

    return (
        <tr className="cart-item">
            <td>{item.product.name}</td>
            <td>{item.quantity}</td>
            <td>${item.product.price}</td>
            <td>
                <button onClick={() => removeItem(item.product.id)}>X</button>
            </td>
        </tr>
    )
}

export default CartItem;
