const CartItem = ({item}) => {
    return (
        <li key={item.product.id} style={{backgroundColor:"grey"}}>
            {item.product.productName} {item.quantity} {item.product.price}
        </li>
    )
}

export default CartItem;
