import Item from './Item'
import './styles/ItemList.css'

const ItemList = ({productos}) => {

    return (
        <div className="item-list">
           {productos.map(product => <Item key={product.id} productDetail={product}/>)}
        </div>
    )
}

export default ItemList;
