import React, { useContext } from "react";
import ModalProd from "../Modal/ModalProd";
import { StoreContext } from "../Store/StoreContext";
import CardsHome from "./CardsHome";

const InfoCards = ({ pictures, textWhite, textViolet, mostrarModal }) => {
  const [state, dispach] = useContext(StoreContext);
  const { showModal, activeProduct } = state;
  console.log(mostrarModal);
  console.log("infocard");
  const tarjetas = pictures.map((card) => (
    <CardsHome prod={card} key={card.id} dispach={dispach} />
  ));

  return (
    <>
      <h1 className="text-4xl text-center mt-4 font-serif text-white">
        {textWhite}{" "}
        <span className="text-4xl text-center font-serif text-violet-900">
          {textViolet}
        </span>
      </h1>
      <div className="flex flex-wrap font-serif justify-center gap-4">
        {" "}
        {tarjetas}{" "}
      </div>
      <ModalProd showModal={showModal} dispach={dispach} prod={activeProduct} />
    </>
  );
};
export default InfoCards;
