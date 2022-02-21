import React from "react";
import iconCarro from "../../assets/images/navbar/carro.svg";
import iconBorwse from "../../assets/images/navbar/buscar.svg";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-white font-serif bg-purple-500">
      <div className="flex items-center mx-2">
        <img
          className="h-10 m-2 border-2 border-solid rounded-full border-cyan"
          src="https://p4.wallpaperbetter.com/wallpaper/975/1021/255/asus-rog-neon-logo-4k-wallpaper-preview.jpg"
          alt="logo asus"
        ></img>
        <p className="text-2xl">GoldWar</p>
      </div>
      <div class="flex flex-grow flex-row-reverse mr-4 sm:hidden">
        <button
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
      <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="flex flex-col sm:flex-grow sm:flex-row">
          <a className="mx-2 text-xl text-center hover:font-bold">Pagina 1</a>
          <a className="mx-2 text-xl text-center hover:font-bold">Pagina 2</a>
          <a className="mx-2 text-xl text-center hover:font-bold">Pagina 3</a>
          <a className="mx-2 text-xl text-center hover:font-bold sm:hidden">Buscar</a>
          <a className="mx-2 text-xl text-center hover:font-bold sm:hidden">Carrito</a>
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
              className="mx-2 fill-white"
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
              className="mx-2 fill-white"
            >
              <circle cx="7" cy="22" r="2" />
              <circle cx="17" cy="22" r="2" />
              <path d="M5.654,5,5.391,2.938A3.328,3.328,0,0,0,2.087,0H0V3H2.087a.331.331,0,0,1,.326.3l1.5,11.759A3.327,3.327,0,0,0,7.217,18H20.4L23.974,5ZM18.112,15H7.217a.329.329,0,0,1-.325-.3L6.037,8h14Z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
