import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-1 justify-center my-8 sm:mx-4">
      <a
        className="flex justify-end rounded-0 sm:rounded-3xl bg-leds-img w-full sm:w-48 h-47 sm:h-96 bg-cover bg-center border-cyan-300 border-2"
        href="#"
      >
        <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500 hover:animate-bounce">
          Led lights
        </span>
      </a>
      <div className="flex flex-wrap flex-row sm:flex-col justify-center sm:justify-between w-full sm:w-auto">
        <a
          className="flex justify-end rounded-0 sm:rounded-3xl bg-notebooks-img w-full sm:w-48 h-47 mb-2 bg-cover bg-center border-cyan-300 border-2"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500 hover:animate-bounce">
            Notebooks
          </span>
        </a>
        <a
          className="flex justify-end rounded-0 sm:rounded-3xl bg-Display-img w-full sm:w-48 h-47 bg-cover bg-center border-cyan-300 border-2"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500 hover:animate-bounce">
            Display
          </span>
        </a>
      </div>
      <a
        className="flex justify-end rounded-0 sm:rounded-3xl bg-sound-img w-full sm:w-48 h-47 sm:h-96 bg-cover bg-center border-cyan-300 border-2"
        href="#"
      >
        <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500 hover:animate-bounce">
          Sound
        </span>
      </a>
      <div className="flex flex-wrap flex-row sm:flex-col justify-center sm:justify-between w-full sm:w-auto">
        <a
          className="flex justify-end rounded-0 sm:rounded-3xl bg-consoles-img w-full sm:w-48 h-47 mb-2 bg-cover bg-center border-cyan-300 border-2"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500 hover:animate-bounce">
            Consoles
          </span>
        </a>
        <a
          className="flex justify-end rounded-0 sm:rounded-3xl bg-mouse-img w-full sm:w-48 h-47 bg-cover bg-center border-cyan-300 border-2"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500 hover:animate-bounce">
            Mouse
          </span>
        </a>
      </div>
      <a
        className="flex justify-end rounded-0 sm:rounded-3xl bg-chairs-img w-full sm:w-48 h-47 sm:h-96 bg-cover bg-center border-cyan-300 border-2"
        href="#"
      >
        <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500 hover:animate-bounce">
          Gaming Chairs
        </span>
      </a>
    </div>
  );
};

export default Categories;
