import {useState, useEffect} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import {allProducts} from '../../productsList'

const ItemListContainer = () => {

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(resolve(allProducts),2000)
        });

        promesa.then(data=>setProducts(data))
    },[])

    const [products, setProducts] = useState();
        
        return (
            <div>
               <ItemList productos={products}/>
            </div>
        )
    }

export default ItemListContainer;
