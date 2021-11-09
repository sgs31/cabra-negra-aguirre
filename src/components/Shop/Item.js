import { NavLink } from 'react-router-dom';
import './styles/Item.css'
import { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

const Item = ({productDetail}) => {
    
    const {cart} = useContext(CartContext);
    
    return (
            <div className="item">
                {console.log(`Ahora mismo esta el cart tiene:`, cart)}
                <div className='item-tittle'>
                    <h4>{productDetail.productName}</h4>
                </div>
                <img src={productDetail.productImg} alt={productDetail.productName} />
                <span>Stock: {productDetail.stock}</span>
                <NavLink to={`/item/${productDetail.id}`}><button>Ver detalles</button></NavLink>
            </div>
    )
}

export default Item;
