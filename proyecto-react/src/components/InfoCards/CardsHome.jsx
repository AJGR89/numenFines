import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { types } from "../Store/StoreReducer";
import * as styles from "./Styles";
const CardsHome = ({ prod, dispach }) => {
  console.log("CardsHome");
  return (
    <div className={styles.MAIN_CONTAINER}>
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

      <button
        onClick={() => dispach({ type: types.showModal, payload: prod })}
        className="bg-gradient-to-r from-purple-500 to-black sm:border-4 sm:border-fuchsia-800 text-white font-serif m-2 py-2 rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
      >
        view details
      </button>
    </div>
  );
};

export default CardsHome;
