import React from "react";
import ProductCard from "./ProductCard";
import { products } from "./products";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const ProductGrid = () => {
  return (
    <>
      <NavBar />
      <h1 className="uppercase text-center text-rose-500 mt-4 mb-4 text-xl font-bold font-serif">
        Select Your Products
      </h1>
      <main className="bg-gradient-to-r from-black via-purple-800 to-black">
        <ul className="sm:grid sm:grid-cols-2 sm:grid-rows-1 justify-evenly place-content-center gap-2 pt-2">
          {products.map((prod) => {
            return <ProductCard key={prod.id} prod={prod} viewHome={false} />;
          })}
        </ul>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default ProductGrid;
