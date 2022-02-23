import React from "react";
import InfoCard from "../InfoCard/InfoCard";
// import { pictures, graphics } from "./data";

const InfoCards = ({ pictures, textWhite, textViolet }) => {
  const tarjetas = pictures.map((card, index) => (
    <InfoCard url={card.url} name={card.name} price={card.price} key={index} />
  ));
  return (
    <>
      <h1 className="text-4xl text-center mt-4 font-serif text-white">
        {textWhite}{" "}
        <span className="text-4xl text-center font-serif text-violet-900">
          {textViolet}
        </span>
      </h1>
      <div className="flex flex-wrap font-serif justify-center gap-4">
        {" "}
        {tarjetas}{" "}
      </div>
    </>
  );
};
export default InfoCards;
