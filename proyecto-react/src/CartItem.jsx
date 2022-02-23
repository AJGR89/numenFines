import React from "react";

const CartItem = ({ data, deleteFromCart }) => {
  const { id, name, price, quantity } = data;

  return (
    <>
      <div className="cart-item">
        <h4>{name}</h4>
        <h5>
          ${price}.00 x {quantity} = ${price * quantity}
        </h5>
        <button onclick={() => deleteFromCart(id)}>Eliminar uno</button>
        <button onclick={() => deleteFromCart(id, true)}>Eliminar todos</button>
      </div>
    </>
  );
};

export default CartItem;
