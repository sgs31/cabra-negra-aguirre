import { useState} from "react";
import { sendOrder } from "../../firebase/orders.query";
import './styles/CartForm.css'

const CartForm = ({cart, total, setId, clear}) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        tel: ""
      })

    const order = {
        buyer: user,
        items: cart,
        total: total
    }
    
    const confirmPucharse = (order) => {
        const userEmpty = checkUserIfEmpty(order.buyer)
        if(!userEmpty){
            const queryToOrder = sendOrder(order)
            queryToOrder.then(orr => setId(orr.id))
        }   
    }

    const checkUserIfEmpty = (buyer) => {
        let ret = false;
        for (let key in buyer){
            if(user[key] === "") ret = true;
        }
        return ret;
    }
    
    const handleInputChange = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value
        })
      }

    return(
        <div className="cart-form">
            <input type="text" placeholder="Nombre" name="name" required onChange={handleInputChange}/>
            <input type="email" placeholder="Email" name="email" required onChange={handleInputChange}/>
            <input type="number" placeholder="Numero de contacto" name="tel" required onChange={handleInputChange}/>
            <button onClick={() => confirmPucharse(order)}>CONFIRMAR COMPRA</button>
        </div>
    )
}

export default CartForm;