import './styles/ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
        <div className="item-detail">
            <img src={item.productImg}/>
            <div>
                <h2>{item.productName}</h2>
                <p>{item.stock}</p>
            </div>
        </div>
    )
}

export default ItemDetail;
