import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { allProducts } from "../../productsList";

const ItemListContainer = () => {
  
  const [products, setProducts] = useState([]);

  const { gender } = useParams();

  const promesa = new Promise((resolve, reject) => {
    resolve(allProducts);
  });

  const productFilter = () => setTimeout(() => promesa.then((data) => {
    if (gender) {
      const productsToRender = data.filter(
        (clothe) => clothe.category === gender
      );
      setProducts(productsToRender);
    } else {
      setProducts(data);
    }}),2000);

  useEffect(() => productFilter(), [gender]);
  
  return products.length === 0 ? (
    <p>Cargando datos...</p>
  ) : (
    <div className="item-list-container">
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;
