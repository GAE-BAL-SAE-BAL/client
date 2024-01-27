import React from "react";
import BottomNavigation from "../../components/BottomNavigation";
import Logo from "../../assets/Logo";
import Person from "../../assets/Person";
import FoodCard from "../../components/FoodCard";
import Header from "../../components/Header";

const Snack = () => {
  return (
    <div className="w-full px-[23px] gap-8 py-12 pb-24 flex flex-col">
      <Header />
      <span className="text-[20px] font-[600]">
        주류와 어울리는
        <br />
        다양한 안주를 만나보세요
      </span>
      <main className="flex flex-wrap w-full gap-[19px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <FoodCard
            key={i}
            src="/mock_snack.png"
            name="손쉽게 구워 맛있게 먹는 소고기 스테이크"
            price={24580}
          />
        ))}
      </main>
      <BottomNavigation current="안주추천" />
    </div>
  );
};

export default Snack;
