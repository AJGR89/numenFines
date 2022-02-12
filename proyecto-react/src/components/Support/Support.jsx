import React from "react";
import Button from "@material-tailwind/react/Button";
import H6 from "@material-tailwind/react/Heading6";
import H4 from "@material-tailwind/react/Heading4";

const Support = () => {
  return (
    <>
      <div className="flex flex-wrap content-center h-90 bg-banner-img h-96 bg-cover">
        <div className="m-4 py-2 ">
          <h1 className="text-8xl text-gray-100">SUMMER SALE</h1>
          <h2 className="text-4xl text-gray-100">Up to 60% off</h2>
          <Button
            color="lightBlue"
            size="lg"
            ripple="light"
            className=" m-2 py-2 px-10"
          >
            {" "}
            Ir a la tienda{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Support;

