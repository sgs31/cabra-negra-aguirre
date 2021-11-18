import { NavLink } from 'react-router-dom';
import './styles/Item.css'

const Item = ({productDetail}) => {
        
    return (
            <div className="item">
                <div className='item-tittle'>
                    <h4>{productDetail.name}</h4>
                </div>
                <img src={productDetail.img} alt={productDetail.name} />
                <span>Stock: {productDetail.stock}</span>
                <NavLink to={`/item/${productDetail.id}`}><button>Ver detalles</button></NavLink>
            </div>
    )
}

export default Item;
