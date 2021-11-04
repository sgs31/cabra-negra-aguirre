import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { allProducts } from "../../productsList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const promesa = new Promise((resolve, reject) => {
    resolve(allProducts);
  });

  useEffect(
    () => setTimeout(() => promesa.then((data) => setProducts(data)), 2000),
    []
  );

    return products.length === 0 ? <p>Cargando datos...</p> :
      <div className="item-list-container">
        <ItemList productos={products} />
      </div>
}

export default ItemListContainer;
