import React from "react";

const TextAndImage = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 text-white  place-content-center gap-8  pt-6">
      <div className=" text-right place-self-end">
        <h1 className=" text-3xl font-bold">Intel® Iris® Xe MAX Graphics</h1>
        <p className=" h-80 w-120 text-lg pt-4">
          Unleash your creativity, unlocked by Intel® Iris® Xe MAX graphics.
          Optimized to pair with 11th Generation Intel® Core™ processors, you
          get even more performance and new capabilities for enhanced content
          creation and gaming. Harness dedicated graphics in the convenience of
          a thin and light laptop with the first discrete graphics processing
          unit (GPU) for PCs based on Intel Xe architecture.
        </p>
      </div>

      <div>
        <img
          src="https://www.intel.la/content/dam/www/public/us/en/images/logos/rwd/iris-xe-max-graphics-badge-rwd.jpg.rendition.intel.web.864.486.jpg"
          alt="iris-xe"
          className="h-80 w-96 object-cover"
        />
      </div>
    </div>
  );
};

export default TextAndImage;
