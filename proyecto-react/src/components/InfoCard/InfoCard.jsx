import React from "react";
// import Card from "@material-tailwind/react/Card";
// import CardImage from "@material-tailwind/react/CardImage";
// import CardBody from "@material-tailwind/react/CardBody";
// import CardFooter from "@material-tailwind/react/CardFooter";
// import H6 from "@material-tailwind/react/Heading6";
// import Paragraph from "@material-tailwind/react/Paragraph";
// import Button from "@material-tailwind/react/Button";

// PREGUNTARLE A GUILLE

const InfoCard = ({url,name,price}) => {
    return (
      <>
        <div className="rounded-2xl border m-4 p-4 text-center bg-white">
          <img className="object-fill h-24 w-48 p-0 m-0" src={url}/>
          <h1 className="text-2xl">{name}</h1>
          <h1 className="text-4xl">$ {price}</h1>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold m-2 py-2 px-5 rounded">
          Comprar 
        </button>
        </div>
      </>
    );
  };

export default InfoCard;



