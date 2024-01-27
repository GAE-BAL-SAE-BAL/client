import React from "react";
import CheckIcon from "../../assets/CheckIcon";
import ArrowRightPurple from "../../assets/ArrowRightPurple";
import Header from "../../components/Header";
import LeftArrowBack from "../../assets/LeftArrowBack";
import { useNavigate } from "react-router-dom";

const MemberShipBuy = () => {
  const navigate = useNavigate();
  return (
    <div className=" left-0 top-0 mypage w-full h-full px-[23px] gap-8 py-12 pb-[16px] flex flex-col bg-white">
      <Header />
      <hgroup
        onClick={() => navigate("/")}
        className="flex gap-[12px] items-center pl-1"
      >
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
      <div className="-mt-8 w-full border-t-[1px] border-b-[1px] border-solid border-[#E8E8E8] py-7 flex items-center gap-[12px]">
        <hgroup
          onClick={() => navigate("/membership/pay")}
          className="px-8 flex items-center justify-between w-full"
        >
          <span className="text-[#6336E2] text-[16px] font-[600]">
            특별한 한 달 만들기
          </span>
          <ArrowRightPurple />
        </hgroup>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-[16px] font-[600]">이런 구성으로 왔었어요!</span>
        <p className="text-[16px] font-[400]">
          1865 셀렉티드 빈야드 까베르네 소비뇽
          <br />
          숙성치즈, 찹스테이크
          <br />
          레드와인 와인 글라스
          <br />
          <br />
          브래드앤버터 샤도네이
          <br />
          카프레제 샐러드
          <br />
          화이트와인 와인 글라스
          <br />
          <br />
          샤를르 드 까자노브 브륏 로제
          <br />
          차돌박이 숙주볶음
          <br />
          스파이시 와인 글라스
        </p>
      </div>
    </div>
  );
};

export default MemberShipBuy;
