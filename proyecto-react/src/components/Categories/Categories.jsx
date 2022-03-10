import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex flex-wrap gap-1 justify-center sm:my-8">
      <Link
        to="/Products"
        className="flex justify-end sm:rounded-3xl bg-leds-img w-full sm:mx-4 h-47 sm:w-48 sm:h-96 bg-cover bg-center  sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
      >
        <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
          Led lights
        </span>
      </Link>
      <div className="flex flex-wrap flex-row sm:flex-col justify-between w-full sm:w-auto">
        <Link
          to="/Products"
          className="flex justify-end sm:rounded-3xl bg-notebooks-img w-full sm:w-48 h-47 bg-cover bg-center  sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
        >
          <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
            Notebooks
          </span>
        </Link>
        <Link
          to="/Products"
          className="flex justify-end sm:rounded-3xl bg-display-img w-full sm:w-48 h-47 bg-cover bg-center  sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
        >
          <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
            Display
          </span>
        </Link>
      </div>
      <Link
        to="/Products"
        className="flex justify-end sm:rounded-3xl bg-sound-img w-full sm:mx-4 sm:w-48 h-47 sm:h-96 bg-cover bg-center  sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
      >
        <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
          Sound
        </span>
      </Link>
      <div className="flex flex-wrap flex-row sm:flex-col justify-between w-full sm:w-auto">
        <Link
          to="/Products"
          className="flex justify-end sm:rounded-3xl bg-consoles-img w-full sm:w-48 h-47 bg-cover bg-center  sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
        >
          <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
            Consoles
          </span>
        </Link>
        <Link
          to="/Products"
          className="flex justify-end sm:rounded-3xl bg-mouse-img w-full sm:w-48 h-47 bg-cover bg-center  sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
        >
          <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
            Mouse
          </span>
        </Link>
      </div>
      <Link
        to="/Products"
        className="flex justify-end sm:rounded-3xl bg-chairs-img w-full sm:mx-4 sm:w-48 h-47 sm:h-96 bg-cover bg-center  sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
      >
        <span className="self-end font-bold mr-4 text-white sm:hover:text-fuchsia-500 sm:hover:animate-bounce">
          Gaming Chairs
        </span>
      </Link>
    </div>
  );
};

export default Categories;
