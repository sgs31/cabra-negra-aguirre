import './styles/ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
        <div className="item-detail">
            <img src={item.productImg}/>
            <div className="item-detail-description">
                <div className="item-detail-description-title">
                    <h1>{item.productName}</h1>
                </div>
                <div className="item-detail-description-body">
                    <span>$ {item.price}</span>
                    <span>Stock disponible: {item.stock}</span>
                </div>
                <div className="item-detail-description-footer">
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;
