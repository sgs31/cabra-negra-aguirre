import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductById } from '../../firebase/products.query'

const ItemDetailContainer = () => {
    
    const [currentProduct, setCurrentProduct] = useState();

    const {id} = useParams();

    useEffect(() => {
        const item = getProductById(id)
        setCurrentProduct(item)
        setTimeout(()=>console.log(item), 5000)
    },[id])

    return currentProduct ? <ItemDetail item={currentProduct}/> : <h1>No se encontro producto</h1>
}

export default ItemDetailContainer
