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
        let userNotEmpty = checkUserIfNotEmpty()
        if(userNotEmpty){
            const queryToOrder = sendOrder(order)
            queryToOrder.then(orr => setId(orr.id))
            clear()
        }    
    }

    const checkUserIfNotEmpty = () => {
        let ret = true;
        let keysUser = Object.keys(user)
        for (let key in keysUser){
            ret = ret && user[key] !== ""
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
            <input type="text" placeholder="Nombre" name="name" required="required" onChange={handleInputChange}/>
            <input type="email" placeholder="Email" name="email" required="required" onChange={handleInputChange}/>
            <input type="number" placeholder="Numero de contacto" name="tel" required="required" onChange={handleInputChange}/>
            <button onClick={() => confirmPucharse(order)}>CONFIRMAR COMPRA</button>
        </div>
    )
}

export default CartForm;