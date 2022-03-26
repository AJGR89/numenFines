import React from "react";
import { types } from "../Store/StoreReducer";

const ModalProd = ({ showModal, dispach, prod }) => {
  // console.log(prod);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center text-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-5 bg-black bg-opacity-80">
            {/*content*/}
            <div className=" bg-white rounded-lg w-120 flex flex-col items-center p-2">
              {/*header*/}
              <div className="">
                <h3 className="text-3xl font-semibold flex justify-center m-2">
                  {prod.title}
                </h3>
              </div>
              {/*body*/}
              <img
                className="object-scale-down h-48 w-60 "
                src={prod.img}
                alt={prod.title}
              />

              <div className="sm:ml-1 sm:text-left flex justify-center m-2 font-semibold text-2xl text-purple-900">
                {" "}
                $ {prod.price}{" "}
              </div>
              <div className="sm:ml-1 sm:text-left flex justify-center mb-2 font-medium">
                {" "}
                {prod.desc}{" "}
              </div>
              {/*footer*/}

              <button
                className="bg-violet-500 text-white active:bg-fuchsia-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
                type="button"
                onClick={() =>
                  dispach({ type: types.addToCart, payload: prod.id })
                }
              >
                Add to Cart
              </button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => dispach({ type: types.closeModal })}
              >
                Close
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalProd;
