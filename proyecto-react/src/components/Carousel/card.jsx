import React from "react";

function Card({ prop  }) {
  return (
    <div
      className="
        flex
        justify-center
        text-3xl md:text-7xl
        p-6 w-50 h-50 bg-slate-300 md:p-10 md:w-60 md:h-60 md:bg-white md:hover:bg-purple-600
        items-center
        drop-shadow-md
        rounded-md"
    >
      <div className="flex">
        
        <div>
        <img className="object-fill h-24 w-48 p-0 m-0" src={prop} />
        {/* <h1> {text}</h1> */}
        </div>
      </div>
    </div>
  );
  
}

export default Card;
