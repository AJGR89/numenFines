import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { StoreContext } from "../Store/StoreContext";
import { types } from "../Store/StoreReducer";
import CartItem from "./CartItem";

const CarritoRender = () => {
  const [state, dispache] = useContext(StoreContext);
  const { cart } = state;
  return (
    <>
      <NavBar />
      <h1>Carrito</h1>
      <main>
        <ul>
          {cart.map((prod) => {
            return <CartItem prod={prod} key={prod.id} dispache={dispache} />;
          })}
          <button
            onClick={() => dispache({ type: types.cleanCart })}
            className="m-2 p-2 self-end border-2 sm:hover:border-fuchsia-500 rounded text-white font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
          >
            Clean Cart
          </button>
        </ul>
      </main>
    </>
  );
};

export default CarritoRender;
