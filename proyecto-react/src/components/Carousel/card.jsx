import React from "react";
import { Link } from "react-router-dom";

function Card({ prop }) {
  const { url, alt } = prop;
  return (
    <div
      className="
        flex flex-wrap
        sm:justify-evenly justify-center
        sm:bg-contain bg-no-repeat bg-colors-img
        sm:bg-slate-300 p-4 sm:w-56 sm:h-60 w-full h-37
        sm:rounded-md
        "
    >
      <div>
        <img className="h-24 w-48 sm:mb-0 mb-2" src={url} alt={alt} />
      </div>
      <Link to="/Products">
        <p className="sm:text-center text-white sm:self-center self-end sm:text-black sm:font-serif sm:mt-8 sm:text-base sm:hover:font-bold sm:hover:text-fuchsia-500">
          See More
        </p>
      </Link>
    </div>
  );
}

export default Card;
