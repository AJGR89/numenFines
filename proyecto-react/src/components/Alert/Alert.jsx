import React, { useState } from "react";
import swal from "sweetalert2";

const Alert = () => {
  const [visible, setVisible] = useState(true);
  const alerta = () => {
    swal.fire("Good job", "You are Welcomen!", "success");
  };
  return (
    <>
      {visible && (
        <div className="hover:py-4 h-full font-serif text-center text-lg text-white bg-purple-600">
          <button
            onClick={() => {
              setVisible(false);
              alerta();
            }}
          >
            <div className="text-center py-2 lg:px-4">
              <div
                className="p-2 bg-purple-800 items-center text-purple-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-purple-500 uppercase px-2 py-1 text-xs font-bold mr-3 sm:animate-pulse">
                  New
                </span>
                <span className="font-semibold mr-2 text-center sm:text-left flex-auto">
                  Free Delivery over $4000. Gift with Purchase over $1500 ...
                </span>
                <svg
                  className="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
