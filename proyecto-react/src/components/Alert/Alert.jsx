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
        <div className="py-2 hover:py-4 h-full text-center text-white bg-purple-600">
          <button
            onClick={() => {
              setVisible(false);
              alerta();
            }}
          >
            <p class="text-lg ...">
              Free Delivery over $4000. Gift with Purchase over $1500 ...
            </p>
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
