import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faTelegram,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialNetworks = () => {
  return (
    <div className="flex justify-center ...">
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faFacebook}
      />
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faInstagram}
      />
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faTelegram}
      />
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faTwitter}
      />
    </div>
  );
};

export default SocialNetworks;
