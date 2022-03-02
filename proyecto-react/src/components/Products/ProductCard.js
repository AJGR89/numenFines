import React from "react";
import ModalProd from "../Modal/ModalProd";

const ProductCard = ({ prod }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <li className="mr-4 m-6 p-6 rounded-2xl border-2 rounded-tl-lg">
      <button onClick={() => setShowModal(true)}>
        <img
          className="h-24 w-48 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
          src="https://m.media-amazon.com/images/I/51-FhVIYrVL.jpg"
          alt="ads"
        />
      </button>

      <div className="m-2 p-2 text-center text-white font-serif font-bold">
        {prod.title}{" "}
      </div>
      <div className="text-right text-white font-serif font-bold">
        {prod.descShort}{" "}
      </div>
      <div className="text-right text-white font-serif font-bold">
        $ {prod.price}
      </div>

      <button className="ml-20 mt-6 border-2 sm:hover:border-fuchsia-500 rounded text-white font-serif font-bold sm:hover:bg-fuchsia-500">
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
