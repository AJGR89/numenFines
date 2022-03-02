import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const InfoCard = ({ url, name, price }) => {
  return (
    <div className="flex flex-col justify-evenly text-right rounded-2xl rounded-tl-lg m-4 p-4 font-serif bg-white border-purple-800 border-4 boder-double">
      <a href="#">
        <FontAwesomeIcon
          className="text-2xl text-amber-300 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
          icon={faStar}
        />
      </a>
      <img
        className="object-fill h-24 w-48 p-0 m-0"
        src={url}
        alt="images-cards"
      />
      <h2 className="text-2xl text-center">{name}</h2>
      <h1 className="text-3xl text-center">${price}</h1>
      <button className="bg-purple-800 sm:border-4 sm:border-fuchsia-800 sm:hover:bg-black text-white font-serif m-2 py-2 rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
        Purchase
      </button>
    </div>
  );
};

export default InfoCard;
