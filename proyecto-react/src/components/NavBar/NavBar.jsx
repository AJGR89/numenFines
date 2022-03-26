import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Store/StoreContext";

const NavBar = () => {
  const [state, dispache] = useContext(StoreContext);
  const { cart } = state;
  let count = cart.length;
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
    <nav className="flex flex-wrap sticky top-0 items-center gap-2 text-white font-light font-monserratAlt z-50 bg-zinc-900 bg-opacity-80 ">
      <div className="flex items-center mx-2 ">
        <a href="/">
          <img
            className="h-10 m-2 rounded-full border-cyan"
            src="../assets/images/navbar/logo.png"
            alt="logo"
          ></img>
        </a>
        <p className="text-2xl font-bold text-fuchsia-900	">Gold War</p>
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
          {count > 0 ? (
            <div className="absolute right-2 top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-cyan-500 static"
                width="24"
                height="24"
              >
                <circle cx="12" cy="12" r="7" />
              </svg>
              <span className="text-white absolute inset-x-2 bottom-0.5">
                {count}
              </span>
            </div>
          ) : null}
        </button>
      </div>
      {visible && (
        <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div className="flex flex-col sm:flex-grow sm:flex-row">
            <Link
              className="mx-2 text-xl text-center sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300 hover:underline"
              to="/"
            >
              Home
            </Link>
            <Link
              className="mx-2 text-xl text-center sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300 hover:underline"
              to="/products"
            >
              Products
            </Link>

            <Link
              to="/Products"
              className="mx-2 text-xl text-center hover:font-bold sm:hidden hover:underline"
            >
              Search
            </Link>
            <Link
              to="/cart"
              className="mx-2 text-xl text-center hover:font-bold sm:hidden hover:underline"
            >
              Shopping Cart {count > 0 ? "(" + count + ")" : null}
            </Link>
          </div>
          <div className="mr-5 hidden sm:flex">
            <Link to="/Products">
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
            </Link>
            <Link to="/cart">
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

              {count > 0 ? (
                <div className="absolute right-5 top-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-cyan-500 static"
                    width="24"
                    height="24"
                  >
                    <circle cx="12" cy="12" r="7" />
                  </svg>
                  <span className="text-white absolute inset-x-2 bottom-0.5">
                    {count}
                  </span>
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
