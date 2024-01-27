import React from "react";
import BottomNavigation from "../../components/BottomNavigation";

const Snack = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col px-[23px] gap-8">
      <BottomNavigation current="안주추천" />
    </div>
  );
};

export default Snack;
