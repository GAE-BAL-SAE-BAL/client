import React, { useState } from "react";
import LeftArrow from "../../assets/LeftArrow";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const SignUpStep3 = () => {
  const [preferDrink, setPreferDrink] = useState([] as string[]);
  const navigate = useNavigate();

  const handleAddPreferDrink = (drink: string) => {
    if (preferDrink.length === 3) return;
    if (preferDrink.includes(drink))
      return setPreferDrink((prev) => prev.filter((title) => title !== drink));
    setPreferDrink((prev) => [...prev, drink]);
  };

  return (
    <div className="w-full h-[100vh] flex flex-col px-[23px] py-12 gap-8">
      <hgroup className="w-full flex items-center gap-3">
        <LeftArrow />
        <span className="text-[18px] font-normal text-[#747674]">돌아가기</span>
      </hgroup>
      <hgroup className="flex flex-col h-full gap-[8px]">
        <h1 className=" font-[600] title-md">좋아하는 주류를 골라주세요</h1>
        <span className=" text-[14px] font-[500] text-[#B9B9BC]">
          추천을 위해서 최대 3개의 주류를 골라주세요.
        </span>
        <div className="w-full flex h-[10px] items-center gap-[4px]">
          <div className="w-[48px] mt-auto h-[4px] bg-[#E8E8E9] rounded-full" />
          <div className="w-[48px] mt-auto h-[4px] bg-[#E8E8E9] rounded-full" />
          <div className="w-[48px] mt-auto h-[4px] bg-[#6336E2] rounded-full" />
        </div>
        <main className="mt-[54px] h-full flex flex-col gap-[20px]">
          <div className="w-full flex flex-wrap gap-[12px]">
            {[
              "국내 맥주",
              "국외 맥주",
              "소주",
              "과일주",
              "브랜디",
              "와인",
              "위스키",
              "샴페인",
              "막걸리",
              "복분자",
            ].map((drink: string) => (
              <button
                key={drink}
                onClick={() => handleAddPreferDrink(drink)}
                className={classNames(
                  "flex items-center w-fit rounded-[12px] justify-center border-[1px] border-solid py-[12px] px-[20px]",
                  preferDrink.includes(drink)
                    ? "border-[#6336E2] text-[#6336E2]"
                    : "border-[#DBDCDE] text-[#000]"
                )}
              >
                <span className="text-[16px] font-[400]">{drink}</span>
              </button>
            ))}
          </div>
        </main>
        <div className="flex flex-col gap-[12px]">
          <button className="w-full py-[13px] border-[1px] border-solid border-[#6336E2] rounded-[12px]">
            <span className="text-[18px] font-[600] text-[#6336E2]">
              넘어갈래요
            </span>
          </button>
          <button
            onClick={() => navigate("/")}
            disabled={!preferDrink.length}
            className="w-full py-[13px] border-[1px] bg-[#6336E2] rounded-[12px] text-[white] disabled:bg-[#D1D2D1] disabled:text-[#A2A4A2]"
          >
            <span className="text-[18px] font-[600]">다음</span>
          </button>
        </div>
      </hgroup>
    </div>
  );
};

export default SignUpStep3;
