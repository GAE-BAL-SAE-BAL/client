import React from "react";
import HomeIcon from "../assets/HomeIcon";
import { useNavigate } from "react-router-dom";
import DrinkIcon from "../assets/DrinkIcon";
import FoodIcon from "../assets/FoodIcon";
import classNames from "classnames";

const BottomNavigation = ({ current }: { current: string }) => {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-white h-20 flex items-center justify-between fixed bottom-0 left-0 border-t-[1px] border-solid border-[#E8E8E9] px-[24px]">
      <div
        onClick={() => navigate("/")}
        className="flex flex-col items-center justify-center gap-1 w-[60px] "
      >
        <HomeIcon isCurrent={current === "홈"} />
        <span
          className={classNames(
            " text-[12px] font-[400]",
            current === "홈" ? "text-[#6336E2]" : "text-[#B9BBB9]"
          )}
        >
          홈
        </span>
      </div>
      <div
        onClick={() => navigate("/drink")}
        className="flex flex-col items-center justify-center gap-1 w-[60px] "
      >
        <DrinkIcon isCurrent={current === "주류추천"} />
        <span
          className={classNames(
            " text-[12px] font-[400]",
            current === "주류추천" ? "text-[#6336E2]" : "text-[#B9BBB9]"
          )}
        >
          주류 추천
        </span>
      </div>
      <div
        onClick={() => navigate("/snack")}
        className="flex flex-col items-center justify-center gap-1 w-[60px] "
      >
        <FoodIcon isCurrent={current === "안주추천"} />
        <span
          className={classNames(
            " text-[12px] font-[400]",
            current === "안주추천" ? "text-[#6336E2]" : "text-[#B9BBB9]"
          )}
        >
          안주 추천
        </span>
      </div>
      <div
        onClick={() => navigate("/cheerup")}
        className="flex flex-col items-center justify-center gap-1 w-[60px] "
      >
        <HomeIcon isCurrent={current === "응원카드"} />
        <span
          className={classNames(
            " text-[12px] font-[400]",
            current === "응원카드" ? "text-[#6336E2]" : "text-[#B9BBB9]"
          )}
        >
          응원 카드
        </span>
      </div>
    </footer>
  );
};

export default BottomNavigation;
