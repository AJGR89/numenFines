import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const CardsHome = ({ prod }) => {
  return (
    <div className="flex flex-col justify-evenly text-right rounded-2xl rounded-tl-lg m-4 p-4 font-serif bg-white ">
      <Link to="/Products">
        <FontAwesomeIcon
          className="text-2xl text-amber-300 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
          icon={faStar}
        />
      </Link>
      <img
        className="object-fill h-24 w-48 p-0 m-0"
        src={prod.img}
        alt="images-cards"
      />
      <h2 className="text-2xl text-center">{prod.title}</h2>
      <h1 className="text-3xl text-center">${prod.price}</h1>

      <Link to={prod.id.toString()}>
        <button className="flex justify-center mt-2 h-12 w-40 ml-4 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-500 text-white font-serif m-2 py-2 rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
          view details
        </button>
      </Link>
    </div>
  );
};

export default CardsHome;
