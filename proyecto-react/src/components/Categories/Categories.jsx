import React from "react";

const Categories = () => {
  return (
    <div className="gap-4">
      <div className="flex flex-wrap gap-1 justify-center my-8 mx-0 sm:mx-6 ">
        <div className="flex justify-end rounded-0 sm:rounded-3xl bg-leds-img w-full sm:w-48 h-47 sm:h-96 bg-cover border-cyan-300 border-2 hover:animate-bounce">
          <a className="self-end text-white font-bold mr-4" href="#">
            led lights
          </a>
        </div>
        <div className="flex flex-wrap flex-row sm:flex-col justify-center sm:justify-between w-full sm:w-auto">
          <div className="flex justify-end rounded-0 sm:rounded-3xl bg-notebooks-img w-full sm:w-48 h-47 mb-2 bg-cover border-cyan-300 border-2 hover:animate-bounce">
            <a className="self-end font-bold mr-4" href="#">
              notebooks
            </a>
          </div>
          <div className="flex justify-end rounded-0 sm:rounded-3xl bg-ledtv-img w-full sm:w-48 h-47 bg-cover border-cyan-300 border-2 hover:animate-bounce">
            <a className="self-end text-white font-bold mr-4" href="#">
              led tv
            </a>
          </div>
        </div>
        <div className="flex justify-end rounded-0 sm:rounded-3xl bg-sound-img w-full sm:w-48 h-47 sm:h-96 bg-cover border-cyan-300 border-2 hover:animate-bounce">
          <a className="self-end text-white font-bold mr-4" href="#">
            audio
          </a>
        </div>
        <div className="flex flex-wrap flex-row sm:flex-col justify-center sm:justify-between w-full sm:w-auto">
          <div className="flex justify-end rounded-0 sm:rounded-3xl bg-consoles-img w-full sm:w-48 h-47 mb-2 bg-cover border-cyan-300 border-2 hover:animate-bounce">
            <a className="self-end font-bold mr-4" href="#">
              consoles
            </a>
          </div>
          <div className="flex justify-end rounded-0 sm:rounded-3xl bg-mouse-img w-full sm:w-48 h-47 bg-cover border-cyan-300 border-2 hover:animate-bounce">
            <a className="self-end text-white font-bold mr-4" href="#">
              mouse
            </a>
          </div>
        </div>
        <div className="flex justify-end rounded-0 sm:rounded-3xl bg-chairs-img w-full sm:w-48 h-47 sm:h-96 bg-cover border-cyan-300 border-2 hover:animate-bounce">
          <a
            className="self-end text-center text-white font-bold mr-4"
            href="#"
          >
            chairs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
