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
        <div className=" text-center text-md text-white bg-purple-900 flex justify-center ">
          <div className="text-center py-1 lg:px-4">
            <span className="text-center sm:text-left flex-auto">
              Free Delivery over $4000. Gift with Purchase over $1500
            </span>
          </div>
          <button
            onClick={() => {
              setVisible(false);
              alerta();
            }}
            className="text-left"
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
