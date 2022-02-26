import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ prod }) => {
  return (
    <li className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500">
      <img
        className={styles.productImage}
        src="https://m.media-amazon.com/images/I/51-FhVIYrVL.jpg"
        alt={prod.title}
      />
      <div>{prod.title} </div>
      <div className={styles.precio}> $ {prod.precio} </div>
      <div className={styles.descShort}> {prod.descShort} </div>

      <button>Agregar al Carrito</button>
    </li>
  );
};

export default ProductCard;
