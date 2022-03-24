import React from "react";
import { types } from "../Store/StoreReducer";

const CartItem = ({ prod, dispache }) => {
  return (
    <div>
      <li>
        <h1>{prod.title}</h1>
        <h3>quantity {prod.quantity}</h3>
        <button
          onClick={() => dispache({ type: types.addToCart, payload: prod.id })}
          className="m-2 p-2 self-end border-2 sm:hover:border-fuchsia-500 rounded text-white font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
        >
          sumar
        </button>
        <button
          onClick={() =>
            dispache({ type: types.removeOneToCart, payload: prod.id })
          }
          className="m-2 p-2 self-end border-2 sm:hover:border-fuchsia-500 rounded text-white font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
        >
          restar
        </button>
        <button
          onClick={() =>
            dispache({ type: types.removeAllToCart, payload: prod.id })
          }
          className="m-2 p-2 self-end border-2 sm:hover:border-fuchsia-500 rounded text-white font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
        >
          eliminar
        </button>
      </li>
    </div>
  );
};

export default CartItem;
