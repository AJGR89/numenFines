import React from "react";
import { types } from "../Store/StoreReducer";

const CartItem = ({ prod, dispache }) => {
  let precio = prod.price * prod.quantity;

  return (
    <div>
      <li className="sm:flex max-h-full justify-center sm:justify-evenly items-center content-center m-4 p-4 ml-2 font-monserratAlt">
        <img className="sm:h-28 sm:w-50" src={prod.img} alt="images" />
        <div className="sm:mx-8 mx-0">
          <h1 className="sm:mb-4 mb-8 text-center">{prod.title}</h1>
          <button
            onClick={() =>
              dispache({ type: types.removeAllToCart, payload: prod.id })
            }
            className="sm:mx-4 p-1 border-2 bg-purple-500  rounded-lg text-black font-Urbanist font-bold sm:hover:bg-fuchsia-500 pl-2 pr-2 "
          >
            Delete
          </button>
        </div>
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={() =>
              dispache({ type: types.addToCart, payload: prod.id })
            }
            className="sm:mx-4 border-2 p-1 bg-purple-500 rounded font-bold sm:hover:bg-fuchsia-500 w-6"
          >
            +
          </button>
          <h3 className="font-monserratAlt">{prod.quantity}</h3>
          <button
            onClick={() =>
              dispache({ type: types.removeOneToCart, payload: prod.id })
            }
            className="sm:mx-4 border-2 p-1 bg-purple-500 rounded font-bold sm:hover:bg-fuchsia-500 w-6 "
          >
            -
          </button>
        </div>
        <h3 className="mx-28 font-bold flex justify-center font-monserratAlt">
          {" "}
          $ {precio}{" "}
        </h3>
      </li>
    </div>
  );
};

export default CartItem;
