import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Products from "./Pages/Products";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App classname="bg-stone-900" />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
