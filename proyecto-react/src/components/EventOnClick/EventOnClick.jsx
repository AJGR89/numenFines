import React, { useState } from "react";
import swal from "sweetalert2";

const EventOnClick = () => {
  const [visible, setVisible] = useState(true)
  const alerta = () => {
    swal.fire("Good job!", "You clicked the button!", "success");
  };
  return (
    <>
      {visible && (
        <div className="py-2 text-left bg-green-500">
          <button
            onClick={() => {
              setVisible(false);
              alerta();
            }}
          >
            Ocultar Barra
          </button>
        </div>
      )}
    </>
  );
};

export default EventOnClick;
