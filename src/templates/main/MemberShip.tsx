import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import LeftArrowBack from "../../assets/LeftArrowBack";
import CheckIcon from "../../assets/CheckIcon";
import RightArrowGray from "../../assets/RightArrowGray";
import { instance } from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MemberShip = () => {
  const navigate = useNavigate();
  const handleCancelSubscribe = async () => {
    await instance.post(
      "/api/v1/user/subscription/cancel",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    toast("멤버십이 해지되었어요!", {
      icon: "ℹ",
    });
    navigate("/");
  };
  const [isOK, setIsOK] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/api/v1/user/subscription", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setIsOK(data.data === "O" ? true : false);
    })();
  }, []);

  return (
    <div className="fixed left-0 top-0 mypage w-full h-full px-[23px] gap-8 py-12 pb-[16px] flex flex-col bg-white">
      <Header />
      <hgroup
        onClick={() => navigate("/")}
        className="flex gap-[12px] items-center pl-1"
      >
        <LeftArrowBack />
        <span>술래잡기 멤버십</span>
      </hgroup>
      <div className="w-full h-[1px] bg-[#EBEBEB]" />
      {isOK ? (
        <>
          <main className="flex flex-col gap-4 px-6">
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
                매월 1~2개의 와인과 잘 어울리는 안주
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
            <hgroup
              onClick={handleCancelSubscribe}
              className="flex items-center justify-between w-full px-8"
            >
              <span className="text-[#A2A4A2] text-[16px] font-[600]">
                멤버십 해지하기
              </span>
              <RightArrowGray />
            </hgroup>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <div>구독 중인 서비스가 없어요.</div>
          <div
            onClick={() => navigate("/membership/buy")}
            className="text-[#6336E2] font-[700]"
          >
            구독하러가기
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberShip;
