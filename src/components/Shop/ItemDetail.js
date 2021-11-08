import ItemCount from './ItemCount';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/ItemDetail.css'

const ItemDetail = ({item}) => {

    const [amount, setAmount] = useState(1);

    const onAdd = () => amount < item.stock ? setAmount(amount + 1) : setAmount(amount);

    const onSub = () => amount <= 1 ? setAmount(amount) : setAmount(amount-1);

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
                   <NavLink to="/cart"><button>AGREGAR AL CARRITO</button></NavLink> 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
