import React from "react";
import { products } from "../Products/products";
import InfoCards from "./InfoCards";

const InfoSale = ({ mostrarModal }) => {
  console.log(mostrarModal);
  const productsSale = products.filter((prod) => prod.id <= 4);
  return (
    <>
      <InfoCards
        textWhite="Now in "
        textViolet="Sale"
        pictures={productsSale}
        mostrarModal={mostrarModal}
      />
    </>
  );
};

export default InfoSale;
