import React, { useReducer } from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "./reducers/shoppingReducer";
import { TYPES } from "./actions/shoppingActions";
import Product from "./Product";
import CartItem from "./CartItem";

const ShoppingCart = () => {
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
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="">
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
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
    </>
  );
};

export default ShoppingCart;
