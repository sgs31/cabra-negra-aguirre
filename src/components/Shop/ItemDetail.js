import ItemCount from './ItemCount'
import { useState, useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import CartContext from '../context/cart/CartContext'
import './styles/ItemDetail.css'


const ItemDetail = ({item}) => {

    const [amount, setAmount] = useState(1)
    const {addItem} = useContext(CartContext)
    const {push} = useHistory()

    const onAdd = () => amount < item.stock ? setAmount(amount + 1) : setAmount(amount)

    const onSub = () => amount <= 1 ? setAmount(amount) : setAmount(amount-1)

    const sendToCart = () => {
        addItem(item, amount)
        push("/cart")
    }

    return (
        <div className="item-detail">
            <img src={item.productImg} alt={item.productName}/>
            <div className="item-detail-description">
                <div className="item-detail-description-title">
                    <h1>{item.productName}</h1>
                </div>
                <div className="item-detail-description-body">
                    <span>$ {item.price}</span>
                    <span>Stock disponible: {item.stock}</span>
                </div>
                <ItemCount initial={amount} onAdd={onAdd} onSub={onSub}/>
                <div className="item-detail-description-footer">
                   <button onClick={sendToCart}>AGREGAR AL CARRITO</button> 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
