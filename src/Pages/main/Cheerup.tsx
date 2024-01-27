import React, { useState } from "react";
import Header from "../../components/Header";
import BottomNavigation from "../../components/BottomNavigation";
import { useModal } from "../../hooks/useModal";
import { styled } from "styled-components";

const cardList = ["/card_1.png", "/card_2.png", "/card_3.png"];

const Cheerup = () => {
  const { openModal, closeModal } = useModal();

  const handleCheeupCardOpenClick = () => {
    openModal({
      component: (
        <div
          onClick={closeModal}
          className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen"
        >
          <AnimationImage
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <img src="/card.png" alt="card" className="w-[90vw] font" />
            <img
              src={cardList[Math.round(Math.random() * 2)]}
              alt="card"
              className="w-[90vw] back"
            />
          </AnimationImage>
        </div>
      ),
    });
  };

  return (
    <div className="w-full px-[23px] gap-8 py-12 pb-24 flex flex-col">
      <Header />
      <div className="w-full h-[60vh] flex items-center justify-center">
        <ul className="flex w-full gap-1 overflow-scroll">
          {Array.from({ length: 20 }).map((_, i) => (
            <img key={i} src="/card.png" alt="card" />
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center w-full">
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

const AnimationImage = styled.div`
  display: inline-grid;
  transition: transform 0.3s;
  transform: perspective(800px) rotateY(0deg);
  transform-style: preserve-3d;
  @keyframes Animation {
    to {
      transform: perspective(1000px) rotateY(180deg);
    }
    from {
      transform: perspective(1000px) rotateY(0deg);
    }
  }
  animation: Animation 1.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  > * {
    grid-area: 1 / 1 / 1 / 1;
    backface-visibility: hidden;
  }
  > .back {
    transform: rotateY(180deg);
  }
`;

export default Cheerup;
