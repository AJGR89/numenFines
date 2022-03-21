import React from "react";
import { products } from "../Products/products";
import InfoCards from "./InfoCards";

const InfoGraphics = ({ mostrarModal }) => {
  const productsLatest = products.filter((prod) => prod.id > 6);
  return (
    <>
      <InfoCards
        textWhite="Latest in "
        textViolet="Graphics Cards"
        pictures={productsLatest}
        mostrarModal={mostrarModal}
      />
    </>
  );
};

export default InfoGraphics;
