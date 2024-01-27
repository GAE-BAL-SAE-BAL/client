import { useRef, useState } from "react";
import RightArrow_ from "../../assets/RightArrow_";
import Search from "../../assets/Search";
import ProductCard from "../../components/ProductCard";
import useDebounce from "../../hook/useDebounce";
import Header from "../../components/Header";
import BottomNavigation from "../../components/BottomNavigation";

export default function DrinkPage() {
  const [search, setSearch] = useState<string>("");
  const debounceState = useDebounce(search, 200);
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
    <div className="w-screen px-6 py-[47px] pb-[100px]">
      <Header />
      <p className="font-semibold text-gray-800 title-sm mt-[20px]">
        당신의 즐거움을 위한
        <br /> 특별한 주류 추천을 받아보세요.
      </p>
      <div className="w-full h-[56px] border border-gray-200 rounded-[12px] flex justify-between pr-4 overflow-hidden items-center mt-5">
        <input
          className="w-full h-full p-4 text-sm font-normal"
          placeholder="주류를 검색해보세요"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Search />
      </div>
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
      <div className="grid grid-cols-2 gap-x-[19px] gap-y-[16px] mt-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <div className="w-full h-[84px] rounded-[12px] bg-black p-5 col-span-2 flex items-center justify-between">
          <p className="font-semibold text-white text-md">
            내가 고른 안주랑
            <br />잘 어울리는 주류 보러가기
          </p>
          <RightArrow_ />
        </div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <BottomNavigation current="주류추천" />
    </div>
  );
}
