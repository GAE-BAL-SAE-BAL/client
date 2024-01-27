import React from "react";

interface MainCardProps {
  name: string;
  price: number;
  src: string;
  onClick: any;
}
const numberWithCommas = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const MainCard = ({ src, name, price, onClick }: MainCardProps) => {
  const foodName = name.length > 7 ? `${name.slice(0, 7)}...` : name;
  return (
    <div onClick={onClick} className="flex flex-col gap-2 w-[120px]">
      <img src={src} alt="food" className="rounded-[20px]" />
      <div className="flex flex-col px-3">
        <hgroup className="flex justify-between">
          <span className="text-[16px] font-[600] text-[#E73A3A]">21%</span>
          <span className="text-[16px] font-[600]">
            {numberWithCommas(price)}
          </span>
        </hgroup>
        <span className="text-[14px] font-[400]">{foodName}</span>
      </div>
    </div>
  );
};

export default MainCard;
