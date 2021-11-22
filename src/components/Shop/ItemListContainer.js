import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {getProducts, getProductsByCategory} from "../../firebase/products.query"

const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);

  const { gender } = useParams();

  useEffect(()=>{
    if(gender){
      const collectionProducts = getProductsByCategory(gender)
      collectionProducts.then(data => setProducts(data))
    }else{
      const collectionProducts = getProducts()
      collectionProducts.then(data => setProducts(data))
    }
  }, [gender])

  return products.length === 0 ? <h1>cargando...</h1> : (
    <div className="item-list-container">
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;