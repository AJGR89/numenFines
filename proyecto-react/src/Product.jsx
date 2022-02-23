import React from "react";

const Product = ({ data, addToCart }) => {
  const { id, name, price } = data;

  return (
    <>
      <div>
        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <button onclick={() => addToCart(id)}>Agregar al carrito</button>
      </div>
    </>
  );
};

export default Product;
