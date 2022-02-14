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
    <div className="flex max-h-full justify-evenly bg-[#a78bfa] p-0 m-0 text-black font-bold">
      <div class="grid grid-cols-3 grid-flow-col auto-cols-max">
        <div class="...">
          <a href="#">
            <img
              className="h-20 rounded-full animate-pulse border-2 border-cyan border-solid"
              src="https://p4.wallpaperbetter.com/wallpaper/975/1021/255/asus-rog-neon-logo-4k-wallpaper-preview.jpg"
              alt="Placas de video"
            ></img>
          </a>
        </div>
        <div className="">
          ATENCIÓN AL CLIENTE
          <br />
          <br />
          <br />
          <ul>
            <li>0810-555-8892</li>
            <li>consultas@venex.com.ar</li>
            <li>WhatsApp +54 11 2040-0949</li>
            <br />
            <li>Lun. a Vie. de 9 a 19h. Sab de 10 a 14h.</li>
            <br />
            <li>VENEX PICKUP POINT</li>
          </ul>
        </div>
        <div>
          SE EL PRIMERO EN ENTERARTE
          <br />
          <br />
          <br />
          <ul>
            <li>Suscribite y recibí las mejores promos!</li>
          </ul>
          <div className="h-40"></div>
          <a href="https://es-la.facebook.com/">
            <FontAwesomeIcon
              className="m-2 text-blue-500 text-3xl hover:text-white"
              icon={faFacebook}
            />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon
              className="m-2 text-red-500 text-3xl hover:text-white"
              icon={faInstagram}
            />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon
              className="m-2 text-sky-500 text-3xl hover:text-white"
              icon={faTwitter}
            />
          </a>
          <a href="https://web.whatsapp.com/">
            <FontAwesomeIcon
              className="m-2 text-green-500 text-3xl hover:text-white"
              icon={faWhatsapp}
            />
          </a>
          <a href="https://www.messenger.com/">
            <FontAwesomeIcon
              className="m-2 text-blue-900 text-3xl hover:text-white"
              icon={faFacebookMessenger}
            />
          </a>
          <a href="https://web.telegram.org/k/">
            <FontAwesomeIcon
              className="m-2 text-black-500 text-3xl hover:text-white"
              icon={faTelegram}
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
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
