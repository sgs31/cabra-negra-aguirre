import CartImg from '../../assets/cart-icon.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={CartImg} alt="img-cart" style={{width:18, marginLeft:15, marginRight:15}} />
        </div>
    )
}

export default CartWidget
