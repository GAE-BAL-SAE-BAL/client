import React, { useState } from "react";
import Header from "../../component/Header";
import LeftArrowBack from "../../assets/LeftArrowBack";
import { useNavigate } from "react-router-dom";
import ArrowUp from "../../assets/ArrowUp";
import ArrowDown from "../../assets/ArrowDown";
import { numberWithCommas } from "../../helpers/numberWithCommas.helper";
import { instance } from "../../api";
import toast from "react-hot-toast";

const MemberShipPay = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleAddSubscribe = async () => {
    await instance.post(
      "/api/v1/user/subscription",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    toast.success("구독에 성공했어요!");
    navigate("/membership");
  };

  return (
    <div className=" left-0 top-0 mypage w-full h-full px-[23px] gap-8 py-12 pb-[16px] flex flex-col bg-white">
      <Header />
      <hgroup
        onClick={() => navigate("/membership/buy")}
        className="flex gap-[12px] items-center pl-1"
      >
        <LeftArrowBack />
        <span>주문/결제</span>
      </hgroup>
      <main className="flex flex-col gap-4">
        <div
          className="flex items-center justify-between w-full"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-[18px] font-[600]">술래잡기 프리미엄</span>
          {isOpen ? <ArrowDown /> : <ArrowUp />}
        </div>
        {isOpen && (
          <>
            <div className="w-full h-[1px] bg-[#EBEBEB]" />
            <div className="flex flex-col w-full gap-1">
              <span className="text-[14px] ">받는 분</span>
              <input
                placeholder="받는 분을 입력해주세요."
                className="border-[1px] w-full px-[16px] h-[56px] hover:border-[#6336E2] rounded-[12px] outline-none border-solid border-[#D1D2D1]"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <span className="text-[14px] ">우편번호</span>
              <div className="flex items-center gap-2">
                <input
                  placeholder="우편번호를 입력해주세요."
                  className="border-[1px] w-full px-[16px] h-[56px] hover:border-[#6336E2] rounded-[12px] outline-none border-solid border-[#D1D2D1]"
                />
                <button className="w-24 h-14 px-[4px] bg-[#6336E2] text-white rounded-[12px]">
                  검색
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <span className="text-[14px] ">상세주소</span>
              <input
                placeholder="상세주소를 입력해주세요."
                className="border-[1px] w-full px-[16px] h-[56px] hover:border-[#6336E2] rounded-[12px] outline-none border-solid border-[#D1D2D1]"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <span className="text-[14px] ">연락처</span>
              <input
                placeholder="-없이 입력해주세요."
                className="border-[1px] w-full px-[16px] h-[56px] hover:border-[#6336E2] rounded-[12px] outline-none border-solid border-[#D1D2D1]"
              />
            </div>
            <div className="w-full mt-3 h-[1px] bg-[#EBEBEB]" />
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-[600]">총 결제금액</span>
              <span className="text-[18px] font-[600]">
                {numberWithCommas(75900)}
              </span>
            </div>
          </>
        )}
      </main>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleAddSubscribe}
          className="w-full px-[22px] py-[13px] bg-[#6336E2] text-white rounded-[12px]"
        >
          토스페이로 결제하기
        </button>
      </div>
    </div>
  );
};

export default MemberShipPay;
