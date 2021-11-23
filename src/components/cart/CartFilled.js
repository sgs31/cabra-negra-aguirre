import { useState } from 'react'
import CartItem from './CartItem'
import {sendOrder} from '../../firebase/orders.query'
import './styles/CartFilled.css'

const CartFilled = ({ cart, util }) => {

    const [id, setId] = useState()
    const [showForm, setShowForm] = useState(false)
    
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
        return <p>Tu compra ha sido realizada con exito con el id de compra: #{id}</p>
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
                    {showForm && <CartForm data={cart, total} util={setId}/>}
                    <button onClick={()=>finalizarCompra()}>{showForm ? "CANCELAR COMPRA" : "FINALIZAR COMPRA"}</button>
                </div>
            </div>)
    }
}

const CartForm = ({data, util }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        tel: ""
      });

    const order = {
        buyer: user,
        items: data.cart,
        total: data.total
    }
    
    const confirmarCompra = (order) => {
        sendOrder(order)
        .then(idOrder => util.setId(idOrder))
    }
    
    const handleInputChange = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value
        })
      }

    return(
        <form>
            <input type="text" placeholder="Nombre" name="name" required onChange={handleInputChange}/>
            <input type="email" placeholder="Email" name="email" required onChange={handleInputChange}/>
            <input type="number" placeholder="Numero de contacto" name="tel" required onChange={handleInputChange}/>
            <button onClick={() => confirmarCompra(order)}>CONFIRMAR COMPRA</button>
        </form>
    )
}

export default CartFilled;