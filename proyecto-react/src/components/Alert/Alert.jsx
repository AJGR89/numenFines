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
        <div className="sm:flex flex-wrap justify-center text-center text-white bg-purple-900 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:hover:bg-blend-hard-light sm:duration-300">
          <span>Free Delivery over $4000. Gift with Purchase over $1500</span>
          <button
            onClick={() => {
              setVisible(false);
              alerta();
            }}
            className="ml-2 hover:text-pink-500"
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
