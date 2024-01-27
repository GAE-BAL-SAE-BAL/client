import React from "react";
import Header from "../../components/Header";
import LeftArrowBack from "../../assets/LeftArrowBack";
import CheckIcon from "../../assets/CheckIcon";
import RightArrowGray from "../../assets/RightArrowGray";

const MemberShip = () => {
  return (
    <div className="fixed left-0 top-0 mypage w-full h-full px-[23px] gap-8 py-12 pb-[16px] flex flex-col bg-white">
      <Header />
      <hgroup className="flex gap-[12px] items-center pl-1">
        <LeftArrowBack />
        <span>술래잡기 멤버십</span>
      </hgroup>
      <div className="w-full h-[1px] bg-[#EBEBEB]" />
      <main className="px-6 flex flex-col gap-4">
        <span className="text-[18px] font-[600]">술래잡기 프리미엄</span>
        <div className="flex items-center gap-1">
          <CheckIcon />
          <span className="text-[16px] font-[400] text-[#6336E2]">
            매월 5~8만원 상당의 와인
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CheckIcon />
          <span className="text-[16px] font-[400] ">
            매월 2~3개의 와인과 잘 어울리는 안주
          </span>
        </div>
        <div className="flex items-center gap-1">
          <CheckIcon />
          <span className="text-[16px] font-[400] ">
            특별한 날 어울리는 와인 잔
          </span>
        </div>
        <div className="py-6 text-[16px] font-[600] ml-auto">월 75,900</div>
      </main>
      <div className="w-full border-t-[1px] border-solid border-[#E8E8E8] py-7 flex items-center gap-[12px]">
        <hgroup className="px-8 flex gap-[12px]">
          <span className=" text-[16px] font-[600]">2024.02.16</span>
          <span className="text-[16px] font-[600]">결제 예정</span>
        </hgroup>
      </div>
      <div className="-mt-8 w-full border-t-[1px] border-b-[1px] border-solid border-[#E8E8E8] py-7 flex items-center gap-[12px]">
        <hgroup className="px-8 flex items-center justify-between w-full">
          <span className="text-[#A2A4A2] text-[16px] font-[600]">
            멤버십 해지하기
          </span>
          <RightArrowGray />
        </hgroup>
      </div>
    </div>
  );
};

export default MemberShip;
