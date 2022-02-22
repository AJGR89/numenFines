import React, { useState, useEffect } from "react";
import Card from "./card";
import { initalState } from "./data";

function Carousel() {
  const [cards, setCards] = useState(initalState);
  const prevWidth = 0;
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const prevState = initalState;
      let visibleCards = 1;

      if (width < 768) 
      {
        visibleCards = 0;
      } 
      else if (width < 1024) 
      {
        visibleCards = 1;
      } 
      else 
      {
        visibleCards = 3;
      }
      prevState.forEach((card, index)=>{
        card.active = index > visibleCards? false:true;
        
      });
      console.log(prevState)
      setCards(prevState);
      handleLeftClick();
      handleRightClick();
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleLeftClick = () => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };

  return (
    <>
      <div className="flex flex-wrap p-10 items-center gap-2 sm:justify-between sm:justify-center sm:gap-4">
        <div
          className="text-xl md:text-5xl cursor-pointer text-white hover:text-fuchsia-500"
          onClick={() => handleLeftClick()}
        >
          {"<"}
        </div>
        {cards
          .filter((f) => f.active === true)
          .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
          .map((card, index) => (
            <Card key={index} prop={card.url} />
          ))}
        <div
          className="text-xl md:text-5xl cursor-pointer text-white hover:text-fuchsia-500"
          onClick={() => handleRightClick()}
        >
          {">"}
        </div>
      </div>
    </>
  );
}

export default Carousel;
