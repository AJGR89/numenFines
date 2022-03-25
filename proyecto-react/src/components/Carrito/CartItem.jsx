import React from "react";
import { types } from "../Store/StoreReducer";

const CartItem = ({ prod, dispache }) => {
  let precio = prod.price * prod.quantity;

  return (
    <div>
      <li className="sm:flex sm:flex-wrap max-h-full justify-center sm:justify-evenly items-center content-center m-4 p-4 ml-2 font-serif">
        <img className="sm:h-28 sm:w-50" src={prod.img} alt="images" />
        <div className="sm:mx-8 mx-0">
          <h1 className="sm:mb-4 mb-8 text-center">{prod.title}</h1>
          <button
            onClick={() =>
              dispache({ type: types.removeAllToCart, payload: prod.id })
            }
            className="sm:mx-4 p-1 border-2 bg-gray-400 sm:hover:border-fuchsia-500 rounded-lg text-black font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
          >
            Delete
          </button>
        </div>
        <button
          onClick={() => dispache({ type: types.addToCart, payload: prod.id })}
          className="sm:mx-4 border-2 p-1 bg-gray-400 sm:hover:border-fuchsia-500 rounded font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
        >
          +
        </button>
        <h3 className="font-serif">{prod.quantity}</h3>
        <button
          onClick={() =>
            dispache({ type: types.removeOneToCart, payload: prod.id })
          }
          className="sm:mx-4 border-2 p-1 bg-gray-400 sm:hover:border-fuchsia-500 rounded font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
        >
          -
        </button>

        <h3 className="mx-28 font-bold"> $ {precio} </h3>
      </li>
    </div>
  );
};

export default CartItem;
