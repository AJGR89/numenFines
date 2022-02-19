import React from "react";

const Brands = () => {
  return (
    <div className="flex flex-wrap h-60 w-4/5 bg-gradient-to-r from-purple-900 to-fuchsia-900 justify-evenly items-center devide-x border-double border-purple-900 border-4 rounded-xl mx-auto bg-gradient-to-l hover:bg-gradient-to-r from-rose-900 to-blue-500">
      <img
        src="https://logodownload.org/wp-content/uploads/2014/04/intel-logo-8.png"
        alt="INTEL"
        className="h-8 sm:h-8 md:h-16"
      />

      <img
        src="https://logos-marcas.com/wp-content/uploads/2020/11/Gigabyte-Logo.png"
        alt="GIGABYTE"
        className="h-16 sm:h-16 md:h-32"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/2048px-HP_New_Logo_2D.svg.png"
        alt="HP"
        className="h-16 sm:h-16 md:h-32"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/2560px-AMD_Logo.svg.png"
        alt="AMD"
        className="h-8 sm:h-8 md:h-16"
      />
      <img
        src="https://1000marcas.net/wp-content/uploads/2020/03/Logo-NVIDIA.png"
        alt="NVIDIA"
        className="h-16 sm:h-16 md:h-32"
      />
    </div>
  );
};

export default Brands;
