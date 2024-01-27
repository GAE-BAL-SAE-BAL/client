import React from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

const MyPageModal = () => {
  const { closeModal } = useModal();
  const navigate = useNavigate();
  return (
    <div className="fixed left-0 top-0 mypage w-full px-[23px] gap-8 py-12 pb-[16px] flex flex-col bg-white">
      <Header />
      <hgroup className="flex gap-[12px] items-center">
        <img className="w-[36px]" src="/profile.png" alt="profile" />
        <span className="text-[18px]">abcd1234</span>
      </hgroup>
      <div className="w-full h-[1px] bg-[#EBEBEB]" />
      <span
        onClick={() => {
          navigate("/membership");
          closeModal();
        }}
        className="text-[16px]"
      >
        현재 내 구독 보기
      </span>
      <div className="w-full flex items-center justify-center">
        <div className="w-[80px] h-[4px] rounded-[10px] bg-[#E9ECEF]" />
      </div>
    </div>
  );
};

export default MyPageModal;
