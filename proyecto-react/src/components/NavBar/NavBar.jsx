import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 639) {
        return setVisible(true);
      }
      return setVisible(false);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <nav className="flex flex-wrap sm:sticky sm:top-0 items-center gap-2 text-white font-serif z-50 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
      <div className="flex items-center mx-2">
        <img
          className="h-10 m-2 rounded-full border-cyan"
          src="https://p4.wallpaperbetter.com/wallpaper/975/1021/255/asus-rog-neon-logo-4k-wallpaper-preview.jpg"
          alt="logo asus"
        ></img>
        <p className="text-2xl font-bold text-black">GoldWar</p>
      </div>
      <div className="flex flex-grow flex-row-reverse mr-4 sm:hidden">
        <button
          onClick={() => setVisible(!visible)}
          id="boton"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-white h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {visible && (
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="flex flex-col sm:flex-grow sm:flex-row">
            <Link
              className="mx-2 text-xl text-center sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
              to="/"
            >
              Home
            </Link>
            <Link
              className="mx-2 text-xl text-center sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
              to="/products"
            >
              Products
            </Link>

            <a className="mx-2 text-xl text-center hover:font-bold sm:hidden">
              Search
            </a>
            <a className="mx-2 text-xl text-center hover:font-bold sm:hidden">
              Shopping Cart
            </a>
          </div>
          <div className="mr-5 hidden sm:flex">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Isolation_Mode"
                data-name="Isolation Mode"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                className="mx-2 fill-white sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
              >
                <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Isolation_Mode"
                data-name="Isolation Mode"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                className="mx-2 fill-white sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
              >
                <circle cx="7" cy="22" r="2" />
                <circle cx="17" cy="22" r="2" />
                <path d="M5.654,5,5.391,2.938A3.328,3.328,0,0,0,2.087,0H0V3H2.087a.331.331,0,0,1,.326.3l1.5,11.759A3.327,3.327,0,0,0,7.217,18H20.4L23.974,5ZM18.112,15H7.217a.329.329,0,0,1-.325-.3L6.037,8h14Z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
