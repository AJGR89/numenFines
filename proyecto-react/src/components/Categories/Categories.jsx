import React from "react";

const Categories = () => {
  return (
    <div className="gap-4">
      <div className="flex flex-wrap gap-1 justify-center my-8 mx-0 sm:mx-6 ">
        <a
          className="flex justify-end rounded-0 sm:rounded-3xl bg-leds-img w-full sm:w-48 h-47 sm:h-96 bg-cover border-cyan-300 border-2"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500">
            Led lights
          </span>
        </a>
        <div className="flex flex-wrap flex-row sm:flex-col justify-center sm:justify-between w-full sm:w-auto">
          <a
            className="flex justify-end rounded-0 sm:rounded-3xl bg-notebooks-img w-full sm:w-48 h-47 mb-2 bg-cover border-cyan-300 border-2"
            href="#"
          >
            <span className="self-end font-bold mr-4 hover:text-fuchsia-500">
              notebooks
            </span>
          </a>
          <a
            className="flex justify-end rounded-0 sm:rounded-3xl bg-ledtv-img w-full sm:w-48 h-47 bg-cover border-cyan-300 border-2"
            href="#"
          >
            <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500">
              led tv
            </span>
          </a>
        </div>
        <a
          className="flex justify-end rounded-0 sm:rounded-3xl bg-sound-img w-full sm:w-48 h-47 sm:h-96 bg-cover border-cyan-300 border-2"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500">
            audio
          </span>
        </a>
        <div className="flex flex-wrap flex-row sm:flex-col justify-center sm:justify-between w-full sm:w-auto">
          <a
            className="flex justify-end rounded-0 sm:rounded-3xl bg-consoles-img w-full sm:w-48 h-47 mb-2 bg-cover border-cyan-300 border-2"
            href="#"
          >
            <span className="self-end font-bold mr-4 hover:text-fuchsia-500">
              consoles
            </span>
          </a>
          <a
            className="flex justify-end rounded-0 sm:rounded-3xl bg-mouse-img w-full sm:w-48 h-47 bg-cover border-cyan-300 border-2"
            href="#"
          >
            <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500">
              mouse
            </span>
          </a>
        </div>
        <a
          className="flex justify-end rounded-0 sm:rounded-3xl bg-chairs-img w-full sm:w-48 h-47 sm:h-96 bg-cover border-cyan-300 border-2"
          href="#"
        >
          <span className="self-end font-bold mr-4 text-white hover:text-fuchsia-500">
            chairs
          </span>
        </a>
      </div>
    </div>
  );
};

export default Categories;
