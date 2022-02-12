import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faTelegram,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

const SocialNetworks = () => {
  return (
    <div className="flex h-40 place-items-center justify-evenly justify-center ...">
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faFacebook}
      />
      <FontAwesomeIcon
        className="m-2 text-orange-500 text-5xl hover:text-blue-900 ..."
        icon={faInstagram}
      />
      <FontAwesomeIcon
        className="m-2 text-sky-500 text-5xl hover:text-blue-900 ..."
        icon={faTwitter}
      />
      <FontAwesomeIcon
        className="m-2 text-green-500 text-5xl hover:text-blue-900 ..."
        icon={faWhatsapp}
      />
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faFacebookMessenger}
      />
      <FontAwesomeIcon
        className="m-2 text-red-500 text-5xl hover:text-blue-900 ..."
        icon={faTelegram}
      />
    </div>
  );
};

export default SocialNetworks;
