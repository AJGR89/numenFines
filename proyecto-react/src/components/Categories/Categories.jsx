import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-1 justify-center sm:my-8">
      <a
        className="flex justify-end sm:rounded-3xl bg-leds-img w-full sm:mx-4 h-47 sm:w-48 sm:h-96 bg-cover bg-center border-purple-500 sm:border-2 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
        href="#"
      >
        <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
          Led lights
        </span>
      </a>
      <div className="flex flex-wrap flex-row sm:flex-col justify-center justify-between w-full sm:w-auto">
        <a
          className="flex justify-end sm:rounded-3xl bg-notebooks-img w-full sm:w-48 h-47 bg-cover bg-center border-purple-500 sm:border-2 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
            Notebooks
          </span>
        </a>
        <a
          className="flex justify-end sm:rounded-3xl bg-display-img w-full sm:w-48 h-47 bg-cover bg-center border-purple-500 sm:border-2 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
            Display
          </span>
        </a>
      </div>
      <a
        className="flex justify-end sm:rounded-3xl bg-sound-img w-full sm:mx-4 sm:w-48 h-47 sm:h-96 bg-cover bg-center border-purple-500 sm:border-2 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
        href="#"
      >
        <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
          Sound
        </span>
      </a>
      <div className="flex flex-wrap flex-row sm:flex-col justify-center justify-between w-full sm:w-auto">
        <a
          className="flex justify-end sm:rounded-3xl bg-consoles-img w-full sm:w-48 h-47 bg-cover bg-center border-purple-500 sm:border-2 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
            Consoles
          </span>
        </a>
        <a
          className="flex justify-end sm:rounded-3xl bg-mouse-img w-full sm:w-48 h-47 bg-cover bg-center border-purple-500 sm:border-2 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
            Mouse
          </span>
        </a>
      </div>
      <a
        className="flex justify-end sm:rounded-3xl bg-chairs-img w-full sm:mx-4 sm:w-48 h-47 sm:h-96 bg-cover bg-center border-purple-500 sm:border-2 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
        href="#"
      >
        <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
          Gaming Chairs
        </span>
      </a>
    </div>
  );
};

export default Categories;
