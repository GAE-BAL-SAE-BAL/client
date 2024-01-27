import React from "react";

interface MainCardProps {
  name: string;
  price: number;
  src: string;
}

const numberWithCommas = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const FoodCard = ({ src, name, price }: MainCardProps) => {
  return (
    <div className="w-[154px] flex flex-col gap-2 mb-3">
      <img src={src} alt="snack" />
      <div className="flex flex-col gap-1 px-1">
        <hgroup className="flex justify-between">
          <span className="text-[16px] font-[600] text-[#E73A3A]">21%</span>
          <span className="text-[16px] font-[600]">
            {numberWithCommas(price)}
          </span>
        </hgroup>
        <span className="text-[14px] font-[400]">{name}</span>
      </div>
    </div>
  );
};

export default FoodCard;
