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
    <div className="flex flex-wrap max-h-full gap-8 justify-center sm:justify-evenly sm:bg-contain sm:bg-fondo-img sm:bg-repeat bg-fondosm-img p-0 m-0 text-white font-bold">
      <div>
        <a href="#">
          <img
            className="sm:h-16 h-14 mt-2 border-2 rounded-full sm:hover:animate-pulse hover:animate-none border-purple-500"
            src="https://p4.wallpaperbetter.com/wallpaper/975/1021/255/asus-rog-neon-logo-4k-wallpaper-preview.jpg"
            alt="logo asus"
          ></img>
        </a>
      </div>
      <div className="mb-3 text-lg mt-2 font-bold tracking-widest text-white-700 title-font">
        <h2 className="sm:hover:text-fuchsia-500 mb-2">CUSTOMER SUPPORT</h2>
        <ul>
          <li className="text-base mt-2 text-white sm:hover:text-fuchsia-500">
            support@GoldWar.com.ar
          </li>
          <li className="text-base mt-2 text-white sm:hover:text-fuchsia-500">
            {" "}
            +54 11 3333-1111
          </li>
          <li className="text-base mt-2 text-white sm:hover:text-fuchsia-500">
            Mon. or Fri. de 9 a 19h.
          </li>
          <li className="text-base mt-2 text-white sm:hover:text-fuchsia-500">
            GoldWar PickUp Point
          </li>
        </ul>
      </div>
      <div className="text-lg mt-2 text-center text-white-700">
        <h2 className="sm:hover:text-fuchsia-500">BE THE FIRST ONE TO KNOW</h2>
        <ul className="mb-8">
          <li className="text-base mt-2 mx-3.5 text-center text-white sm:hover:text-fuchsia-500">
            <h2>Subscribe and receive the best promotions!</h2>
          </li>
        </ul>
        <a target="_blank" href="https://es-la.facebook.com/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white sm:hover:text-fuchsia-500 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
            icon={faFacebook}
          />
        </a>
        <a target="_blank" href="https://www.instagram.com">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white sm:hover:text-fuchsia-500 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
            icon={faInstagram}
          />
        </a>
        <a target="_blank" href="https://twitter.com/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white sm:hover:text-fuchsia-500 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
            icon={faTwitter}
          />
        </a>
        <a target="_blank" href="https://web.whatsapp.com/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white sm:hover:text-fuchsia-500 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
            icon={faWhatsapp}
          />
        </a>
        <a target="_blank" href="https://www.messenger.com/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white sm:hover:text-fuchsia-500 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
            icon={faFacebookMessenger}
          />
        </a>
        <a target="_blank" href="https://web.telegram.org/k/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white sm:hover:text-fuchsia-500 sm:ease-in-out sm:delay-80 sm:hover:-translate-y-1 sm:hover:scale-110 sm:duration-300"
            icon={faTelegram}
          />
        </a>
      </div>
      <div className="text-white-700 text-center mt-2 mb-2 sm:hover:text-fuchsia-500">
        <h2>Copyright © 2022 - GoldWar</h2>
        <img
          className="h-14 mt-8"
          src="https://latolderiaonline.com.ar/wp-content/themes/latolderia/source/img/data-fiscal.jpg"
          alt="fiscal"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
