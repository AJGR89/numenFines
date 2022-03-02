import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Productos from "./Pages/Productos";

const Home = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App classname="bg-stone-900" />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </Router>
    </>
  );
};

export default Home;
