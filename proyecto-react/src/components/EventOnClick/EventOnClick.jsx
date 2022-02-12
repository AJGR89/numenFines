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
        <div className="py-2 bg-violet-900 text-white relative">
          <h1 className= "flex justify-center">Free delivery over $4000. Free gift with purchase over $1500.</h1>
          <button className=" absolute top-2 right-4"
            onClick={() => {
              setVisible(false);
              alerta();
            }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default EventOnClick;
