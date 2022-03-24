import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import NavBar from "../NavBar/NavBar";
import ModalProd from "../Modal/ModalProd";
import { StoreContext } from "../Store/StoreContext";

const ProductGrid = () => {
  const [state, dispach] = useContext(StoreContext);
  const { showModal, activeProduct } = state;

  return (
    <>
      <NavBar />
      <h1 className="uppercase text-center text-rose-500 mt-4 mb-4 text-xl font-bold font-serif">
        Select Your Products
      </h1>
      <main className="bg-gradient-to-r from-black via-purple-800 to-black">
        <ul className="sm:grid sm:grid-cols-2 sm:grid-rows-1 justify-evenly place-content-center gap-2 pt-2">
          {products.map((prod) => {
            return <ProductCard key={prod.id} prod={prod} dispach={dispach} />;
          })}
        </ul>
        <ModalProd
          showModal={showModal}
          dispach={dispach}
          prod={activeProduct}
        />
      </main>
      <div>
        <h3>Cart</h3>
        <div>
          {cart.map((item, index) => (
            <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />
          ))}
        </div>
        <br />
        <button onClick={() => clearCart()}>Limpiar Carrito</button>
        <div>
          {cart.map((item, index) => (
            <CartItem key={index} data={item} clearCart={clearCart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
