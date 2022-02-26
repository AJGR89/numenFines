import React from "react";
import Button from "@material-tailwind/react/Button";

export const Banner = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center sm:justify-evenly text-center sm:text-left font-serif">
        <div className="h-96 w-full bg-cover bg-center bg-banner-img">
          <h1 className="text-white text-6xl mt-20 sm:mx-1">SUMMER SALE</h1>
          <h2 className="text-white text-4xl mt-6 sm:mx-1">Up to 60% off</h2>
          <Button
            color="purple"
            size="lg"
            ripple="light"
            className="text-white font-serif sm:w-16 w-32 mt-6 mx-28 sm:mx-14 rounded sm:hover:animate-pulse"
          >
            Shop
          </Button>
        </div>
      </div>
    </>
  );
};

export default Banner;
