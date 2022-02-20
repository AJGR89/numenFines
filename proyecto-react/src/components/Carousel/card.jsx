import React from "react";

function Card({ prop }) {
  return (
    <div
      className="
        flex flex-wrap
        justify-evenly
        bg-contain bg-no-repeat bg-fondo-img
        p-6 w-full h-full bg-slate-300 md:p-10 md:w-60 md:h-60 md:bg-white
        drop-shadow-md
        rounded-md
        "
    >
      <div>
        <img className="pt-2 h-auto w-auto" src={prop} alt="images" />
      </div>
      <p className="text-center font-serif text-base hover:text-fuchsia-500">
        See More
      </p>
    </div>
  );
}

export default Card;
