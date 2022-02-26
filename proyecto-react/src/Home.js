import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductGrid from "./components/Productos/ProductGrid";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App classname="bg-stone-900" />} />
          <Route
            path="/productos"
            element={<ProductGrid classname="bg-stone-900" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
