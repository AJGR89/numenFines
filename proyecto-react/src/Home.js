import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import StoreProvider from "./components/Store/StoreContext";
import Carrito from "./Pages/Carrito";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";

const Home = () => {
  return (
    <Router>
        <StoreProvider>
      <Routes>
          <Route path="/" element={<App classname="bg-stone-900" />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
        </StoreProvider>
    </Router>
  );
};

export default Home;
