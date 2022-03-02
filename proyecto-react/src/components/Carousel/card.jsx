import React from "react";

function Card({ prop }) {
  return (
    <div
      className="
        flex flex-wrap
<<<<<<< HEAD
        justify-evenly
        bg-contain bg-no-repeat bg-fondo-img
        p-6 h-full bg-slate-300 md:p-10 md:w-60 md:h-60 md:bg-white
=======
        sm:justify-evenly justify-center
        bg-contain bg-no-repeat bg-colors-img sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300
        bg-slate-300 sm:p-8 sm:w-56 sm:h-60 h-30 w-50 sm:bg-white
>>>>>>> main
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
