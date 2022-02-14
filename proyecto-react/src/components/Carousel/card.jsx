import React from "react";
import { useState } from "react/cjs/react.development";

function Card({ prop }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
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
      <div onClick={handleClick} className="flex">
        <div className={editable ? "opacity-0" : "opacity-800"}>{prop}</div>
        <div className="text-sm cursor-pointer text-gray-500">
          {editable ? "close | update" : "edit"}
        </div>
        <div>
          <img
            className="bg-cover"
            src="https://www.muycomputer.com/wp-content/uploads/2020/01/RTX-2080-Ti.jpg"
            alt="Placas de video"
          ></img>
        </div>
        <input
          className="text-sm w-15 bg-slate-100"
          type={!editable && "hidden"}
          value={prop}
        />
      </div>
    </div>
  );
}

export default Card;
