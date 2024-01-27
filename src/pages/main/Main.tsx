import React from "react";
import RightArrow from "../../assets/RightArrow";
import RightArrowWhite from "../../assets/RightArrowWhite";
import MainCard from "../../components/MainCard";
import BottomNavigation from "../../components/BottomNavigation";
import Header from "../../components/Header";

const Main = () => {
  return (
    <>
      <div className="w-full px-[23px] gap-8 py-12 pb-24 flex flex-col">
        <Header />
        <main className="relative h-[71vh]">
          <img className="absolute" src="/main.png" alt="main" />
          <div className="absolute top-[280px] left-[14px] rounded-[16px] bg-[#00000033] px-[20px] py-[40px] flex flex-col gap-[12px] border-[1px] border-solid border-[#FFFFFF66]">
            <span className="text-[26px] font-normal text-white">
              매달 한 번, <br />
              나를 위해서 특별하게
            </span>
            <p className="text-white">
              19,900원 부터 시작하는
              <br />
              나만을 위한 와인과 안주를 받아보세요.
              <br />
              매달 마지막주 원하는 요일에 보내드려요.
            </p>
            <button className="text-black bg-white rounded-full w-fit flex items-center gap-1 py-[12px] px-[16px]">
              <span>특별한 날 만들기</span>
              <RightArrow />
            </button>
          </div>
        </main>
        <main className="w-full rounded-[20px] flex flex-col py-[36px] items-center gap-8 bg-[#F2F2F2]">
          <span className="text-[16px] font-[600] text-center">
            내 취향에 <span className="text-[#6336E2]">꼭</span> 맞는
            <br />
            다양한 주류를 즐겨보세요
          </span>
          <ul className="ml-[24px] flex gap-1 overflow-scroll">
            {Array.from({ length: 20 }).map((_, i) => (
              <img key={i} src="/mock.png" alt="mock" />
            ))}
          </ul>
          <button className="text-white bg-[#6336E2] rounded-full w-fit flex items-center gap-1 py-[12px] px-[16px]">
            <span>특별한 날 만들기</span>
            <RightArrowWhite />
          </button>
        </main>
        <main className="-mt-6">
          <img src="/main_aside.png" alt="main_aside" />
        </main>
        <main className="flex flex-col gap-4">
          <span className="text-[16px] font-[600]">
            주류와 어울리는
            <br />
            다양한 안주를 만나보세요
          </span>
          <ul className="flex gap-3 overflow-scroll">
            {Array.from({ length: 20 }).map((_, i) => (
              <MainCard
                key={i}
                src="/mock-b.png"
                name="소고기 스테이크 A급"
                price={999999}
              />
            ))}
          </ul>
          <div className="w-full flex items-center justify-center py-4">
            <button className="text-white bg-[#6336E2] rounded-full w-fit flex items-center gap-1 py-[12px] px-[16px]">
              <span>안주 보러가기</span>
              <RightArrowWhite />
            </button>
          </div>
        </main>
      </div>
      <BottomNavigation current="홈" />
    </>
  );
};

export default Main;
