import './styles/Item.css'

const Item = ({productDetail}) => {
    return (
            <div className="item">
                <div className='item-tittle'>
                    <h4>{productDetail.productName}</h4>
                </div>
                <img src={productDetail.productImg} alt={productDetail.productName} />
                <span>Stock: {productDetail.stock}</span>
                <button>Ver detalles</button>
            </div>
    )
}

export default Item;
