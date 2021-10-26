import ItemCount from './ItemCount'
import model from '../../assets/model.svg'


const ItemListContainer = ({greeting}) => {
    
    const itemExample = {
        productName: 'Vestido Dark Queen',
        stock: 5,
        productImg: model
    }
    
    return (
        <div>
            <ItemCount itemExample={itemExample}/>
        </div>
    )
}

export default ItemListContainer
