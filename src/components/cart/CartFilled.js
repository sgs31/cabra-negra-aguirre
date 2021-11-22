import CartItem from './CartItem'
import './styles/CartFilled.css'

const CartFilled = ({ cart, util }) => {
    
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
                            <th><button onClick={util}>Limpiar</button></th>
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

export default CartFilled;