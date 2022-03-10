import React from "react";
import ModalProd from "../Modal/ModalProd";

const ProductCard = ({ prod }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <li className="flex flex-wrap sm:items-start items-center justify-evenly m-4 p-4 rounded-2xl border-2 sm:hover:border-purple-700 sm:hover:bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
      <button onClick={() => setShowModal(true)}>
        <img className="h-28 w-50" src={prod.img} alt="images" />
      </button>

      <div className="m-2 p-2 text-center text-white font-serif font-bold">
        {prod.title}{" "}
      </div>
      <div className="m-2 p-2 text-white font-serif font-bold">
        {prod.descShort}{" "}
      </div>
      <div className="m-2 p-2 text-white font-serif font-bold">
        $ {prod.price}
      </div>

      <button className="m-2 p-2 self-end border-2 sm:hover:border-fuchsia-500 rounded text-white font-serif font-bold sm:hover:bg-fuchsia-500 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
        ADD TO CART
      </button>
      <ModalProd
        showModal={showModal}
        setShowModal={setShowModal}
        prod={prod}
      />
    </li>
  );
};

export default ProductCard;
