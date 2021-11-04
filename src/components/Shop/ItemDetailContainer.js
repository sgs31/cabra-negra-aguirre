import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { allProducts } from '../../productsList'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    
    const [currentProduct, setCurrentProduct] = useState();

    const {id} = useParams();

    const getItem = new Promise((resolve, reject)=>{
        console.log(id)
        const item = allProducts.find(it => it.id == id)
            if(item){
                console.log(item)
                resolve(item)
            }else{
                reject('Hubo un problema con encontrar ese producto')
            }
        });

    useEffect(() => getItem.then(item => setCurrentProduct(item)),[])
    
    console.log(currentProduct)
    return currentProduct!= undefined ? <ItemDetail item={currentProduct}/> : <h1>sigue sin funcionar</h1>

}

export default ItemDetailContainer
