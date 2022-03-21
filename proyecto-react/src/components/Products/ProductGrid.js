import React, { useReducer } from "react";
import ProductCard from "./ProductCard";
import NavBar from "../NavBar/NavBar";
import CartItem from "../CartItem";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../../components/reducers/shoppingReducer";

const ProductGrid = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    console.log("add product", id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCT, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <>
      <NavBar />
      <h1 className="uppercase text-center text-rose-500 mt-4 mb-4 text-xl font-bold font-serif">
        Select Your Products
      </h1>
      <main className="bg-gradient-to-r from-black via-purple-800 to-black">
        <ul className="sm:grid sm:grid-cols-2 sm:grid-rows-1 justify-evenly place-content-center gap-2 pt-2">
          {products.map((prod) => {
            return (
              <ProductCard
                key={prod.id}
                prod={prod}
                viewHome={false}
                addToCart={addToCart}
              />
            );
          })}
        </ul>
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
