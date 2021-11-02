import {useEffect} from 'react'
import { allProducts } from "../../productsList"

const ItemDetailContainer = ({id}) => {
    
    const getItem = id => {
        return new Promise((resolve, reject)=>{
        const item = allProducts.find(it => it.id === id)
        setTimeout(()=>{
            if(item){
                resolve(item)
            }else{
                reject('Hubo un problema con encontrar ese producto')
            }
        },2000)    
    })};

    useEffect(()=>{
        getItem(id)
    },[])
    
    return (
        <ItemDetail item={getItem}/>
    )
}

export default ItemDetailContainer
