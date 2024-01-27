import GlobalHeader from "../../components/GlobalHeader";
import React, { useRef, useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function AlcoholPage() {
  const alcoholArray = [
    "국내 맥주",
    "국외 맥주",
    "소주",
    "과일주",
    "브랜디",
    "와인",
    "위스키",
    "샴페인",
    "막거리",
    "복분자",
  ];

  return (
    <div className="w-screen px-6 py-[47px]">
      <GlobalHeader />
      <p className="font-semibold text-gray-800 title-sm mt-[20px]">
        당신의 즐거움을 위한
        <br /> 특별한 주류 추천을 받아보세요.
      </p>
      <div className="flex gap-3 mt-5 overflow-scroll">
        {alcoholArray.map((item) => {
          const buttonRef = useRef<HTMLDivElement>(null);
          const [select, setSelect] = useState<boolean>(false);
          return (
            <div
              className="px-5 py-3 rounded-[12px] border border-gray-300 whitespace-nowrap cursor-pointer"
              onClick={() => {
                if (buttonRef.current) {
                  buttonRef.current.style.borderColor = select
                    ? "#B9BBB9"
                    : "#6336E2";
                  setSelect((prev) => !prev);
                }
              }}
              ref={buttonRef}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-x-[19px] gap-y-[16px]">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
