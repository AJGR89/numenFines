import React from "react";
import Button from "@material-tailwind/react/Button";

export const Banner = () => {
  return (
    <>
      <div className="flex flex-wrap h-96 justify-evenly items-center sm:flex flex-col sm:items-start bg-cover bg-center bg-banner-img font-serif">
        <h1 className="text-white text-6xl mt-2 sm:mx-1">SUMMER SALE</h1>
        <h2 className="text-white text-4xl mt-2 sm:mx-1">Up to 60% off</h2>
        <Button
          color="purple"
          size="lg"
          ripple="light"
          className="text-white font-serif sm:w-16 w-32 mt-6 rounded sm:mx-10 hover:animate-pulse"
        >
          Shop
        </Button>
      </div>
    </>
  );
};

export default Banner;
