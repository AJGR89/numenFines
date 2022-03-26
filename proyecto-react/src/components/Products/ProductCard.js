import { types } from "../Store/StoreReducer";

const ProductCard = ({ prod, dispach }) => {
  return (
    <div>
      <li className="flex flex-wrap sm:items-start items-center justify-evenly m-4 p-4 rounded-2xl border-2 bg-white h-56 sm:hover:-translate-y-1 sm:hover:scale-105 sm:hover:bg-blend-hard-light sm:duration-300">
        <img className="h-28 w-50" src={prod.img} alt="images" />

        <div className="m-2 p-2 text-center text-black font-monserratAlt font-bold">
          {prod.title}{" "}
        </div>
        <div className="m-2 p-2 text-black font-monserratAlt font-bold">
          {prod.descShort}{" "}
        </div>
        <div className="m-2 p-2 text-black font-monserratAlt font-bold">
          $ {prod.price}
        </div>

        <button
          onClick={() => dispach({ type: types.showModal, payload: prod })}
          className="m-2 p-2 self-end border-2 rounded text-white font-monserratAlt font-bold bg-purple-500 sm:hover:bg-fuchsia-500"
        >
          View Details
        </button>
      </li>
    </div>
  );
};

export default ProductCard;
