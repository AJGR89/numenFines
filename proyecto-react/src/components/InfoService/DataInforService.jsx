import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faSmileWink,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const DataInforService = () => {
  return (
    <div className="sm:grid sm:grid-cols-3">
      <div>
        <p className="sm:col-span-1 p-12 m-8 text-center text-white text-md sm:mt-15 mt-4">
          <FontAwesomeIcon
            className="m-2 text-5xl text-purple-700"
            icon={faBox}
          />
          <p className="pt-4 text-xl font-bold font-Urbanist">Free delivery</p>
          <p className="mt-6 font-Urbanist text-justify">
            For purchases over $4000. We focus on the gamer public providing the
            latest technology through supplies and equipment latest generation,
            the most recognized and reliable brands.
          </p>
        </p>
      </div>

      <div>
        <p className="sm:col-span-2 p-12 m-4 text-center text-white text-md mt-4">
          <FontAwesomeIcon
            className="m-2 text-5xl text-purple-700"
            icon={faMoneyBill}
          />
          <p className="pt-4 text-xl font-bold font-Urbanist">
            {" "}
            Safe payment methods
          </p>
          <p className="mt-6 font-Urbanist text-justify">
            The means of payment available are cash, credit card, debit card,
            transfers, payment market, even installments without interest. For
            your peace of mind, all our products have warranty up to 3 years.
          </p>
        </p>
      </div>

      <div>
        <p className="sm:col-span-3 p-12 m-8 text-center text-white text-md sm:mt-15 mt-4">
          <FontAwesomeIcon
            className="m-2 text-5xl text-purple-700"
            icon={faSmileWink}
          />
          <p className="pt-4 text-xl font-bold font-Urbanist">
            {" "}
            Exchange points for rewards
          </p>
          <p className="text-md mt-6 font-Urbanist text-justify">
            Buying online you earn points for your rewards. Follow us on our
            networks to get discount coupons and information about our products.
          </p>
        </p>
      </div>
    </div>
  );
};

export default DataInforService;
