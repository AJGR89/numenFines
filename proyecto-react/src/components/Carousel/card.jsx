import React from "react";

function Card({ prop }) {
  return (
    <div
      className="
        flex flex-wrap
        sm:justify-evenly justify-center
        bg-contain bg-no-repeat bg-colors-img sm:hover:bg-blend-hard-light
        bg-slate-300 sm:p-8 sm:w-56 sm:h-60 w-40 h-40 sm:bg-white
        drop-shadow-md
        rounded-md
        "
    >
      <div>
        <img className="h-24 w-48" src={prop} alt="images" />
      </div>
      <p className="text-center font-serif sm:mt-8 text-base sm:hover:text-fuchsia-500">
        See More
      </p>
    </div>
  );
}

export default Card;
