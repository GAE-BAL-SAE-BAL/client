import React, { useState } from "react";
import Header from "../../components/Header";
import BottomNavigation from "../../components/BottomNavigation";
import { useModal } from "../../hooks/useModal";

const cardList = ["/card_1.png", "/card_2.png", "/card_3.png"];
const Cheerup = () => {
  const { openModal } = useModal();

  const handleCheeupCardOpenClick = () => {
    openModal({
      component: (
        <img
          src={cardList[Math.round(Math.random() * 2)]}
          alt="card"
          className="w-[90vw] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      ),
    });
  };

  return (
    <div className="w-full px-[23px] gap-8 py-12 pb-24 flex flex-col">
      <Header />
      <div className="w-full h-[60vh] flex items-center justify-center">
        <ul className="w-full flex gap-1 overflow-scroll">
          {Array.from({ length: 20 }).map((_, i) => (
            <img key={i} src="/card.png" alt="card" />
          ))}
        </ul>
      </div>
      <div className="w-full items-center flex justify-center">
        <button
          onClick={handleCheeupCardOpenClick}
          className=" px-[22px] py-[13px] bg-[#6336E2] rounded-[12px] w-fit flex items-center justify-center text-white"
        >
          응원카드 뽑기
        </button>
      </div>
      <BottomNavigation current="응원카드" />
    </div>
  );
};

export default Cheerup;
