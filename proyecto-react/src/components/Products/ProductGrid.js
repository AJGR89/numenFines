import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./products";
import NavBar from "../NavBar/NavBar";
import ModalProd from "../Modal/ModalProd";

const ProductGrid = () => {
  return (
    <>
      <NavBar />
      <ModalProd />
      <h1 className="uppercase text-center text-rose-500 mt-4 mb-4 text-xl font-bold font-serif">
        Select Your Products
      </h1>
      <main className="bg-gradient-to-r from-black via-purple-800 to-black">
        <ul className="flex flex-wrap gap-0 justify-center sm:my-8">
          {products.map((prod) => {
            return <ProductCard key={prod.id} prod={prod} />;
          })}
        </ul>
      </main>
    </>
  );
};

export default ProductGrid;
