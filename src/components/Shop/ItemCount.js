import {useState} from 'react'
import './styles/ItemCount.css'

const ItemCount = (props) => {   

    const [cantidad, setCantidad] = useState(1);

    const onAdd = () => cantidad < props.itemExample.stock ? setCantidad(cantidad + 1) : setCantidad(cantidad);

    const onSub = () => cantidad <= 1 ? setCantidad(cantidad) : setCantidad(cantidad-1);

return (
    <div className='item-count'>
        <img src={props.itemExample.productImg} alt="item-count-img" />
        <div className='item-count-description'>
            <span>{props.itemExample.productName}</span><span> stock: {props.itemExample.stock}</span>
        </div>
        <div className="item-count-management">
            <button onClick={onSub}><img src="https://icongr.am/octicons/chevron-down.svg?size=20&color=currentColor" alt="add" /></button>
            <span>{cantidad}</span>
            <button onClick={onAdd}><img src="https://icongr.am/octicons/chevron-up.svg?size=20&color=currentColor" alt="add" /></button>
        </div>
        <button className="item-count-add"><img src="https://icongr.am/material/cart-plus.svg?size=16&color=currentColor" alt="add-to-cart" /></button>
    </div>
    )
}


export default ItemCount;