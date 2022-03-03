import React from "react";

const ModalProd = ({ showModal, setShowModal, prod }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            {/*content*/}
            <div className="mx-2 max-w-3xl bg-white">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t bg-gradient-to-r from-purple-500 to-black">
                <h3 className="text-3xl font-semibold ">{prod.title}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <img
                className="object-scale-down sm:ml-52 h-48 w-60"
                src={prod.img}
                alt={prod.title}
              />

              <div className="sm:ml-1 sm:text-left text-center">
                {" "}
                $ {prod.price}{" "}
              </div>
              <div className="sm:ml-1 sm:text-left text-center">
                {" "}
                {prod.desc}{" "}
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b bg-black">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalProd;
