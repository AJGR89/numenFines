import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import productReducer, {
  initialProductState,
} from "./components/Carrito/ProductReducer";
import { types } from "./components/Carrito/types";
import ModalProd from "./components/Modal/ModalProd";
import Carrito from "./Pages/Carrito";
import Products from "./Pages/Products";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [productState, dispach] = useReducer(
    productReducer,
    initialProductState
  );
  const { product, cart, activeProduct } = productState;

  const mostrarModal = (prod) => {
    console.log(prod);
    dispach({
      types: types.showProduct,
      payload: prod,
    });

    setShowModal(true);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <App classname="bg-stone-900" mostrarModal={mostrarModal} />
            }
          ></Route>
          <Route
            path="/products"
            element={<Products mostrarModal={mostrarModal} />}
          ></Route>
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
      <ModalProd
        showModal={showModal}
        setShowModal={setShowModal}
        prod={activeProduct}
      />
    </>
  );
};

export default Home;
