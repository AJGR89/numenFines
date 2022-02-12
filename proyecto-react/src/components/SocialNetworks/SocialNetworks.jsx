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
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" rel="noOper" rel="noFollow">
        <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faFacebook}
      />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer" rel="noOper" rel="noFollow">
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faInstagram}
      />
      </a>
      <a href="#">
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faTelegram}
      />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer" rel="noOper" rel="noFollow">
      <FontAwesomeIcon
        className="m-2 text-blue-500 text-5xl hover:text-blue-900 ..."
        icon={faTwitter}
      />
      </a>
    </div>
  );
};

export default SocialNetworks;
