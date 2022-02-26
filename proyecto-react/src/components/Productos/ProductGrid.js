import React from "react";
import ProductCard from "./ProductCard";
import productos from "./productos.json";
import styles from "./ProductCardGrid.module.css";

const ProductGrid = () => {
  return (
    <>
      <h1 className={styles.title}>Productos</h1>
      <main>
        <ul className="flex flex-wrap gap-1 justify-center sm:my-8">
          {productos.map((prod) => {
            return <ProductCard key={prod.id} prod={prod} />;
          })}
        </ul>
      </main>
    </>
  );
};

export default ProductGrid;
