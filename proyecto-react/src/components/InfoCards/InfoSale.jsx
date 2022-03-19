import React from "react";
import { Outlet } from "react-router-dom";
import { products } from "../Products/products";
import InfoCards from "./InfoCards";

const InfoSale = () => {
  const productsSale = products.filter((prod) => prod.id <= 4);
  return (
    <>
      <InfoCards
        textWhite="Now in "
        textViolet="Sale"
        pictures={productsSale}
      />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default InfoSale;
