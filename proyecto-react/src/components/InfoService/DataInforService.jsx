import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
        faBox,
        faSmileWink,
        faMoneyBill,
    } from "@fortawesome/free-solid-svg-icons";


const DataInforService = () => {
    return (
      <div className='flex flex-col flex-wrap w-full py-32 mx-auto'>
    <div className='flex grid-cols-3'>
    
<p className="col-span-1 p-12 m-4 text-center text-white text-md mt-15">     
    <FontAwesomeIcon className="m-2 text-5xl"
        icon={faBox}/>
      <br />       
        <p className='pt-4 text-xl font-bold'>Free delivery</p> 
     <br />
        <p className='text-center'>Para compras superiores a $4000. Nos enfocamos en el publico gamer brindando lo último en tecnología a través de insumos y equipos de última generación, las marcas más reconocidas y confiables.</p>
     <br />
</p>
    
 <p className="col-span-2 p-12 m-4 text-center text-white text-md mt-15">
    <FontAwesomeIcon className="m-2 text-5xl"
         icon={faMoneyBill}/>
      <br />
        <p className='pt-4 text-xl font-bold'> Safe payment methods</p>
      <br />
        <p className='text-center'>Los medios de pagos disponibles son efectivos, tarjeta de crédito, tarjeta de débito, transferencias, mercado pago, hasta cuotas sin interés. Para tu tranquilidad, todos nuestros productos cuentan con garantía de hasta 3 años.</p>
      <br />
</p>

<p className="col-span-3 p-12 m-4 text-center text-white text-md mt-15">
    <FontAwesomeIcon className="m-2 text-5xl"
         icon={faSmileWink}/>
      <br />
        <p className='pt-4 text-xl font-bold'> Exchange points for rewards</p>
      <br />
        <p className='text-md'>Comprando de manera online ganas puntos para tus recompensas. Síguenos en nuestras redes para obtener cupones de descuento e información de nuestros productos.</p> 
       <br />
</p>

</div>  

</div>
  )
}

export default DataInforService;