import React from 'react';
import images from '../../assets/images/1366_2000.jpg'

const Support = () => {
  return (
    <>
      <div>
        <img className= "flex flex-col h-96 object-contain hover:object-scale-down" 
          src={images}/>
        <h1>LÍDERES EN EL MERCADO </h1>
        <h2>Las mejores marcas del país </h2>
        <button> Ir a la tienda </button>
      </div>
    </>
    );
};

export default Support;
