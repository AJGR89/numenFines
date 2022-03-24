import React from "react";
import ProductGrid from "../components/Products/ProductGrid";
import ShoppingCart from "../components/ShoppingCart";

const Products = ({ mostrarModal }) => {
  return (
    <>
      <ProductGrid mostrarModal={mostrarModal} />
    </>
  );
};

export default Products;
