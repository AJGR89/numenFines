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
      <main>
        <ul className="bg-white divide-solid divide-y-2 divide-purple-700">
          {cart.map((prod) => {
            return <CartItem prod={prod} key={prod.id} dispache={dispache} />;
          })}
        </ul>
        <div className="flex justify-center">
          <button
            onClick={() => dispache({ type: types.cleanCart })}
            className="m-2 p-2 bg-gray-400 sm:hover:border-fuchsia-500 rounded-lg text-black font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
          >
            Clear All
          </button>
        </div>
      </main>
    </>
  );
};

export default CarritoRender;
