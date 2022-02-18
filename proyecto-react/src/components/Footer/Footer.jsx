import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className="flex max-h-full justify-evenly bg-[#616060] p-0 m-0 text-white font-bold">
       <div class="grid grid-cols-3 grid-flow-col auto-cols-max">
        <div class="...">
         <div class="mb-16">
    </div>
          <a href="#">
            <img
              className="h-20 border-2 border-solid rounded-full animate-pulse border-cyan"
              src="https://p4.wallpaperbetter.com/wallpaper/975/1021/255/asus-rog-neon-logo-4k-wallpaper-preview.jpg"
              alt="Placas de video"
            ></img>
          </a>
         </div>
         <div className="mb-3 text-lg font-bold tracking-widest text-indigo-700 title-font">
           ATENCIÓN AL CLIENTE
           <br />
           <br />
           <ul>
             <li className="text-base text-white hover:text-fuchsia-500">0810-555-8892</li>
             <li className="text-base text-white hover:text-fuchsia-500">consultas@venex.com.ar</li>
             <li className="text-base text-white hover:text-fuchsia-500">WhatsApp: </li>
             <li className="text-base text-white hover:text-fuchsia-500"> +54 11 2040-0949</li>
             <br />
             <li className="text-base text-white hover:text-fuchsia-500">Lun. a Vie. de 9 a 19h.</li>
             <li className="text-base text-white hover:text-fuchsia-500">Sab de 10 a 14h.</li>
            <br />
             <li className="text-base text-white hover:text-fuchsia-500">VENEX PICKUP POINT</li>
           </ul>
         </div>
         <div className="text-lg text-indigo-700">
           SE EL PRIMERO EN ENTERARTE
           <br />
           <br />
           <ul>
            <li className="text-base text-white hover:text-fuchsia-500">
              Suscribite y recibí las mejores promos!
              </li>
           </ul>
           <div className="h-10"></div>
           <a href="https://es-la.facebook.com/">
             <FontAwesomeIcon
              className="m-2 text-5xl text-white hover:text-fuchsia-500"
              icon={faFacebook}
            />
           </a>
           <a href="https://www.instagram.com">
             <FontAwesomeIcon
              className="m-2 text-5xl text-white hover:text-fuchsia-500"
              icon={faInstagram}
            />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon
              className="m-2 text-5xl text-white hover:text-fuchsia-500"
              icon={faTwitter}
            />
           </a>
           <div className="h-3"></div>
           <a href="https://web.whatsapp.com/">
             <FontAwesomeIcon
              className="m-2 text-5xl text-white hover:text-fuchsia-500"
              icon={faWhatsapp}
            />
          </a>
          <a href="https://www.messenger.com/">
            <FontAwesomeIcon
              className="m-2 text-5xl text-white hover:text-fuchsia-500"
              icon={faFacebookMessenger}
            />
          </a>
          <a href="https://web.telegram.org/k/">
            <FontAwesomeIcon
              className="m-2 text-5xl text-white hover:text-fuchsia-500"
              icon={faTelegram}
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="text-indigo-700">
        Copyright © 2018 - Venex
        <br />
        <br />
        <br />
        <img
          className="h-28"
          src="https://indahaus.com.ar/wp-content/uploads/2020/02/footer_pay.jpg"
          alt="GG"
        ></img>
      </div>
    </div>
  );
  
};

export default Footer;
