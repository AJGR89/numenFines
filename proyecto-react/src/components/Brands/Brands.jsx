import React from "react";
import { brands } from "../../api/data-api";

const Brands = () => {
  const brandsArray = brands.map((el,index)=>
    <img className="h-8 sm:h-12 md:h-20" src={el.url} alt={el.alt} />
  );
  return (
    <div className="flex flex-wrap sm:h-60 sm:w-4/5 mt-4 mb-4 bg-gradient-to-r from-purple-500 to-black-200 bg-gradient-to-l justify-evenly items-center devide-x border-double border-purple-900 sm:border-4 sm:rounded-xl mx-auto sm:hover:bg-gradient-to-r sm:hover:from-purple-400 sm:hover:to-black">
      {brandsArray}
    </div>
  );
};

export default Brands;
