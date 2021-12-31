import { useState } from 'react'
import CartItem from './CartItem'
import CartForm from './CartForm'
import { useHistory } from 'react-router-dom'
import './styles/CartFilled.css'

const CartFilled = ({ cart, clear }) => {

    const [id, setId] = useState()
    const [showForm, setShowForm] = useState(false)
    const {push} = useHistory()
    
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

    const finalizarCompra = () => {
        setShowForm(!showForm)
    }

    if(id){
        clear()
        push(`/scssMs/${id}`)
        return 0;
    }else{
        return (
            <div className="cart-filled">
                <div className="cart-filled-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th><button onClick={clear}>Limpiar</button></th>
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
                    {showForm && <CartForm cart={cart} total={total()} setId={setId}/>}
                    <button onClick={()=>finalizarCompra()}>{showForm ? "CANCELAR COMPRA" : "FINALIZAR COMPRA"}</button>
                </div>
            </div>)
    }
}

export default CartFilled;