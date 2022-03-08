import React from "react";

function Card({ prop }) {
  const { url, alt } = prop;
  return (
    <div
      className="
        flex flex-wrap
        sm:justify-evenly justify-center
        sm:bg-contain bg-no-repeat bg-colors-img sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300
        sm:bg-slate-300 sm:p-8 sm:w-56 sm:h-60 w-full h-37
        sm:drop-shadow-md
        sm:rounded-md
        "
    >
      <div>
        <img className="h-24 w-48" src={url} alt={alt} />
      </div>
      <p className="sm:text-center text-white sm:self-center self-end sm:ml-0 ml-20 sm:text-black sm:font-serif sm:mt-8 sm:text-base sm:hover:font-bold sm:hover:text-fuchsia-500">
        See More
      </p>
    </div>
  );
}

export default Card;
