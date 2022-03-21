import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ModalProd from "../Modal/ModalProd";
import { Link } from "react-router-dom";

const ProductCard = ({ prod, viewHome, addToCart }) => {
  const [showModal, setShowModal] = useState(false);

  return !viewHome ? (
    <li className="flex flex-wrap sm:items-start items-center justify-evenly m-4 p-4 rounded-2xl border-2 sm:hover:border-purple-700 sm:hover:bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
      <img className="h-28 w-50" src={prod.img} alt="images" />

      <div className="m-2 p-2 text-center text-white font-serif font-bold">
        {prod.title}{" "}
      </div>
      <div className="m-2 p-2 text-white font-serif font-bold">
        {prod.descShort}{" "}
      </div>
      <div className="m-2 p-2 text-white font-serif font-bold">
        $ {prod.price}
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="m-2 p-2 self-end border-2 sm:hover:border-fuchsia-500 rounded text-white font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
      >
        View Details
      </button>
      <ModalProd
        showModal={showModal}
        setShowModal={setShowModal}
        prod={prod}
        addToCart={addToCart}
      />
    </li>
  ) : (
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
      <button
        onClick={() => setShowModal(true)}
        className="flex justify-center mt-2 h-12 w-40 ml-4 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-500 text-white font-serif m-2 py-2 rounded sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
      >
        add to cart
      </button>
      <ModalProd
        showModal={showModal}
        setShowModal={setShowModal}
        prod={prod}
        addToCart={addToCart}
      />
    </div>
  );
};

export default ProductCard;
