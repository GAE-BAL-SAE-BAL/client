import React, { useEffect, useState } from "react";
import RightArrow from "../../assets/RightArrow";
import RightArrowWhite from "../../assets/RightArrowWhite";
import MainCard from "../../components/MainCard";
import BottomNavigation from "../../components/BottomNavigation";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api";

const Main = () => {
  const navigate = useNavigate();
  const [drinkList, setDrinkList] = useState([]);
  const [snackList, setSnackList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/api/v1/drink/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setDrinkList(data.data);
    })();
    (async () => {
      const { data } = await instance.get("/api/v1/snack/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setSnackList(data.data);
    })();
  }, []);

  return (
    <>
      <div className="w-full px-[23px] gap-8 py-12 pb-24 flex flex-col">
        <Header />
        <main className="relative h-[71vh]">
          <img className="absolute" src="/main.png" alt="main" />
          <div className="absolute top-[280px] left-[14px] rounded-[16px] bg-[#00000033] px-[20px] py-[40px] flex flex-col gap-[12px] border-[1px] border-solid border-[#FFFFFF66]">
            <span className="text-[26px] font-normal text-white">
              매달 한 번, <br />
              나를 위해서 특별하게
            </span>
            <p className="text-white">
              19,900원 부터 시작하는
              <br />
              나만을 위한 와인과 안주를 받아보세요.
              <br />
              매달 마지막주 원하는 요일에 보내드려요.
            </p>
            <button
              onClick={() => navigate("/membership/buy")}
              className="text-black bg-white rounded-full w-fit flex items-center gap-1 py-[12px] px-[16px]"
            >
              <span>특별한 날 만들기</span>
              <RightArrow />
            </button>
          </div>
        </main>
        <main className="w-full rounded-[20px] flex flex-col py-[36px] items-center gap-8 bg-[#F2F2F2]">
          <span className="text-[16px] font-[600] text-center">
            내 취향에 <span className="text-[#6336E2]">꼭</span> 맞는
            <br />
            다양한 주류를 즐겨보세요
          </span>
          <ul className="ml-[24px] flex gap-1 overflow-scroll">
            {drinkList.map((drink: any) => (
              <img
                className="w-[110px] h-[140px] rounded-[12px]"
                key={drink.id}
                src={drink.image}
                alt="images"
                onClick={() => navigate(`/drink/${drink.id}`)}
              />
            ))}
          </ul>
          <button
            onClick={() => navigate("/drink")}
            className="text-white bg-[#6336E2] rounded-full w-fit flex items-center gap-1 py-[12px] px-[16px]"
          >
            <span>주류 보러가기</span>
            <RightArrowWhite />
          </button>
        </main>
        <main className="-mt-6">
          <img src="/main_aside.png" alt="main_aside" />
        </main>
        <main className="flex flex-col gap-4">
          <span className="text-[16px] font-[600]">
            주류와 어울리는
            <br />
            다양한 안주를 만나보세요
          </span>
          <ul className="flex gap-3 overflow-scroll">
            {snackList.map((snack: any) => (
              <MainCard
                onClick={() => navigate(`/snack/${snack.id}`)}
                key={snack.id}
                src={snack.image}
                name={snack.name}
                price={snack.price}
              />
            ))}
          </ul>
          <div className="w-full flex items-center justify-center py-4">
            <button
              onClick={() => navigate("/snack")}
              className="text-white bg-[#6336E2] rounded-full w-fit flex items-center gap-1 py-[12px] px-[16px]"
            >
              <span>안주 보러가기</span>
              <RightArrowWhite />
            </button>
          </div>
        </main>
      </div>
      <BottomNavigation current="홈" />
    </>
  );
};

export default Main;
