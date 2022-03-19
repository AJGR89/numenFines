import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ModalProd from "./components/Modal/ModalProd";
import Carrito from "./Pages/Carrito";
import Products from "./Pages/Products";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App classname="bg-stone-900" />}>
            <Route path="/:prodId" element={<ModalProd />} />
          </Route>
          <Route path="/products" element={<Products />}>
            <Route path="/products/:prodId" element={<ModalProd />} />
          </Route>
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
