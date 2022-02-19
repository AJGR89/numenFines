import React from "react";
import Button from "@material-tailwind/react/Button";

export const CardBanner = () => {
  return (
    <>
      <div className="flex flex-wrap relative h-128">
        <img
          src="https://i.pinimg.com/originals/dd/c2/c4/ddc2c4bc0f36016f6f3c607d7ef3108d.jpg"
          alt="banner"
          className="object-fit h-128 w-full absolute bg-black opacity-50"
        />
        <h1 className="text-8xl text-gray-100 absolute top-96 left-8">
          SUMMER SALE
        </h1>
        <h2 className="text-4xl text-gray-100 absolute top-120 left-8">
          Up to 60% off
        </h2>
        <Button
          color="purple"
          size="lg"
          ripple="light"
          className=" m-2 py-2 px-10 absolute left-8 top-121 "
        >
          {" "}
          Ir a la tienda{" "}
        </Button>
      </div>
    </>
  );
};

export default CardBanner;
