import React from "react";
import ProductGrid from "../components/Products/ProductGrid";


const Products = ({ mostrarModal }) => {
  return (
    <>
      <ProductGrid mostrarModal={mostrarModal} />
    </>
  );
};

export default Products;
