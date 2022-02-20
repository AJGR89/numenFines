import React from "react";

const InfoCard = ({ url, name, price }) => {
  return (
    <div>
      <div className="rounded-2xl rounded-tl-lg m-4 p-4 text-center font-serif bg-white ">
        <img
          className="object-fill h-24 w-48 p-0 m-0"
          src={url}
          alt="images-cards"
        />
        <h2 className="text-2xl">{name}</h2>
        <h1 className="text-3xl">$ {price}</h1>
        <button className="bg-purple-600 border-dotted border-4 border-fuchsia-600 hover:bg-black text-white font-serif font-bold m-2 py-2 px-5 rounded">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
