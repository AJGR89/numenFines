import React from "react";
import ModalProd from "../Modal/ModalProd";
import styles from "./ProductCard.module.css";

const ProductCard = ({ prod }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <li className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500">
      <button onClick={() => setShowModal(true)}>
        <img
          className={styles.productImage}
          src="https://m.media-amazon.com/images/I/51-FhVIYrVL.jpg"
          alt={prod.title}
        />
      </button>

      <div>{prod.title} </div>
      <div className={styles.precio}> $ {prod.precio} </div>
      <div className={styles.descShort}> {prod.descShort} </div>

      <button>Agregar al Carrito</button>
      <ModalProd
        showModal={showModal}
        setShowModal={setShowModal}
        prod={prod}
      />
    </li>
  );
};

export default ProductCard;
