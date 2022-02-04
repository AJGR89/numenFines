import React from 'react';
import swal from 'sweetalert2'



const EventOnClick = () => {
  const alerta = () => {
    swal.fire("Good job!", "You clicked the button!", "success");
  };
  return (
    <>
      <button onClick={() => alerta()}> push </button>
    </>
  );
};

export default EventOnClick;
