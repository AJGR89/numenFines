import React, { useContext } from "react";
import ModalProd from "../Modal/ModalProd";
import { StoreContext } from "../Store/StoreContext";
import CardsHome from "./CardsHome";

const InfoCards = ({ pictures, textWhite, textViolet }) => {
  const [state, dispach] = useContext(StoreContext);
  const { showModal, activeProduct } = state;

  const tarjetas = pictures.map((card) => (
    <CardsHome prod={card} key={card.id} dispach={dispach} />
  ));

  return (
    <>
      <h1 className="text-4xl text-center mt-4 font-light font-Urbanist text-white">
        {textWhite}{" "}
        <span className="text-4xl text-center font-semibold font-Urbanist text-violet-900">
          {textViolet}
        </span>
      </h1>
      <div className="flex flex-wrap font-Urbanist justify-center gap-4">
        {" "}
        {tarjetas}{" "}
      </div>
      <ModalProd showModal={showModal} dispach={dispach} prod={activeProduct} />
    </>
  );
};
export default InfoCards;
