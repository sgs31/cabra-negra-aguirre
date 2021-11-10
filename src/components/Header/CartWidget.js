import CartImg from '../../assets/cart-icon.svg'
import { useHistory } from 'react-router-dom'
import './styles/CartWidget.css'

const CartWidget = () => {
    
    const {push} = useHistory()

    return (
        <div className="cart-widget">
            <img src={CartImg} alt="img-cart" onClick={() => push('/cart')}/>
        </div>
    )
}

export default CartWidget
