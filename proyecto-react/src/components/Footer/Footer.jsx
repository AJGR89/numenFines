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
    <div className="flex flex-wrap max-h-full gap-8 justify-center justify-evenly bg-contain bg-fondo-img p-0 m-0 text-white font-bold">
      <div>
        <a href="#">
          <img
            className="h-20 mt-2 border-2 border-solid rounded-full animate-pulse border-cyan"
            src="https://p4.wallpaperbetter.com/wallpaper/975/1021/255/asus-rog-neon-logo-4k-wallpaper-preview.jpg"
            alt="logo asus"
          ></img>
        </a>
      </div>
      <div className="mb-3 text-lg mt-2 font-bold tracking-widest text-white-700 title-font">
        <h2 className="hover:text-fuchsia-500 mb-2">CUSTOMER SUPPORT</h2>
        <ul>
          <li className="text-base mt-2 text-white hover:text-fuchsia-500">
            support@GoldWar.com.ar
          </li>
          <li className="text-base mt-2 text-white hover:text-fuchsia-500">
            {" "}
            +54 11 3333-1111
          </li>
          <li className="text-base mt-2 text-white hover:text-fuchsia-500">
            Mon. or Fri. de 9 a 19h.
          </li>
          <li className="text-base mt-2 text-white hover:text-fuchsia-500">
            GoldWar PickUp Point
          </li>
        </ul>
      </div>
      <div className="text-lg mt-2 text-center text-white-700">
        <h2 className="hover:text-fuchsia-500">BE THE FIRST ONE TO KNOW</h2>
        <ul className="mb-8">
          <li className="text-base mt-2 text-center text-white hover:text-fuchsia-500">
            <h2>Subscribe and receive the best promotions!</h2>
          </li>
        </ul>
        <a href="https://es-la.facebook.com/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white hover:text-fuchsia-500"
            icon={faFacebook}
          />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white hover:text-fuchsia-500"
            icon={faInstagram}
          />
        </a>
        <a href="https://twitter.com/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white hover:text-fuchsia-500"
            icon={faTwitter}
          />
        </a>
        <a href="https://web.whatsapp.com/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white hover:text-fuchsia-500"
            icon={faWhatsapp}
          />
        </a>
        <a href="https://www.messenger.com/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white hover:text-fuchsia-500"
            icon={faFacebookMessenger}
          />
        </a>
        <a href="https://web.telegram.org/k/">
          <FontAwesomeIcon
            className="m-2 text-4xl text-white hover:text-fuchsia-500"
            icon={faTelegram}
          />
        </a>
      </div>
      <div className="text-white-700 text-center mt-2 mb-2 hover:text-fuchsia-500">
        <h2>Copyright © 2022 - GoldWar</h2>
        <img
          className="h-28 mt-8"
          src="https://indahaus.com.ar/wp-content/uploads/2020/02/footer_pay.jpg"
          alt="GG"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
