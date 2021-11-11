import CartImg from '../../assets/cart-icon.svg'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/cart/CartContext'
import './styles/CartWidget.css'

const CartWidget = () => {
    
    const {cart} = useContext(CartContext);
    const {push} = useHistory();

    const units = () => {
        let unitsInCart = 0;
        cart.map(item => unitsInCart+= item.quantity)
        return unitsInCart;
    }

    return (
        <div className="cart-widget">
            <div className="cart-widget-quantity"><span>{units()}</span></div>
            <img src={CartImg} alt="img-cart" onClick={() => push('/cart')}/>
        </div>
    )
}

export default CartWidget;
