import React, { useEffect, useState } from "react";
import BottomNavigation from "../../component/BottomNavigation";
import FoodCard from "../../component/FoodCard";
import Header from "../../component/Header";
import SearchIcon from "../../assets/SearchIcon";
import RightArrowBig from "../../assets/RightArrowBig";
import SnackNotFound from "../../assets/SnackNotFound";
import { instance } from "../../api";
import { useNavigate } from "react-router-dom";

const Snack = () => {
  const [snackList, setSnackList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/api/v1/snack/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setSnackList(data.data);
      setRegacy(data.data);
    })();
  }, []);
  const [search, setSearch] = useState("");
  const [regacy, setRegacy] = useState([]);

  const handleClick = () => {
    if (!search.length) {
      return setSnackList(regacy);
    }
    setSnackList((prev) =>
      prev.filter((drink: any) => drink.name.includes(search))
    );
  };

  return (
    <div className="w-full px-[23px] gap-8 py-12 pb-24 flex flex-col">
      <Header />
      <span className="text-[20px] font-[600]">
        주류와 어울리는
        <br />
        다양한 안주를 만나보세요
      </span>
      <div className="relative h-[58px]">
        <input
          onChange={({ target: { value } }) => setSearch(value)}
          value={search}
          className="p-[16px] absolute w-full rounded-[12px] border-[1px] border-solid border-[#D0D1D2]"
          placeholder="안주를 검색해보세요"
        />
        <SearchIcon
          onClick={handleClick}
          className="absolute right-4 top-[17px]"
        />
      </div>
      {snackList.length ? (
        <main className="flex flex-wrap w-full gap-[19px]">
          {snackList
            .slice(0, Math.round(snackList.length / 2))
            .map((snack: any) => (
              <FoodCard
                onClick={() => navigate(`/snack/${snack.id}`)}
                key={snack.id}
                src={snack.image}
                name={snack.name}
                price={snack.price}
              />
            ))}
          <div
            onClick={() => navigate("/drink")}
            className="w-full p-[20px] flex items-center justify-between bg-black rounded-[12px]"
          >
            <span className="text-[16px] font-[600] text-white ">
              내가 고른 안주랑
              <br />잘 어울리는 주류 보러가기
            </span>
            <RightArrowBig />
          </div>
          {snackList
            .slice(Math.round(snackList.length / 2), snackList.length)
            .map((snack: any) => (
              <FoodCard
                onClick={() => navigate(`/snack/${snack.id}`)}
                key={snack.id}
                src={snack.image}
                name={snack.name}
                price={snack.price}
              />
            ))}
        </main>
      ) : (
        <main className="w-full h-[50vh] flex flex-col gap-[12px] items-center justify-center">
          <SnackNotFound />
          <span className="text-[16px] font-[400] text-center text-[#B9BBB9]">
            해당 안주 상품이 없어요.
            <br />
            오타나 띄어쓰기 등을 점검해주세요.
          </span>
        </main>
      )}
      <BottomNavigation current="안주추천" />
    </div>
  );
};

export default Snack;
