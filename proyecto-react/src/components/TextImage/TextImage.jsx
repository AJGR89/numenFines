import React from "react";

const TextAndImage = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:grid-rows-1 text-white place-content-center gap-8 pt-8">
      <div className="sm:text-right sm:place-self-end mx-4 sm:mx-0">
        <h1 className="text-2xl sm:text-3xl text-center font-Urbanist">
          Intel® Iris® Xe MAX Graphics
        </h1>
        <p className="sm:text-right text-justify h-48 w-full sm:h-80 sm:w-120 sm:text-lg mt-4">
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
          className="sm:mt-0 mt-14 h-48 w-full sm:h-80 sm:w-96 sm:object-cover"
        />
      </div>
    </div>
  );
};

export default TextAndImage;
