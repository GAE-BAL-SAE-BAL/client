import { useEffect, useState } from "react";
import RightArrow_ from "../../assets/RightArrow_";
import Search from "../../assets/Search";
import Header from "../../components/Header";
import BottomNavigation from "../../components/BottomNavigation";
import { instance } from "../../api";
import FoodCard from "../../components/FoodCard";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

export default function DrinkPage() {
  const [category, setCategory] = useState("");
  const alcoholArray = [
    "국내맥주",
    "수입맥주",
    "소주",
    "과일주",
    "와인",
    "위스키",
    "샴페인",
    "막거리",
    "복분자",
  ];

  const [drinkList, setDrinkList] = useState([]);
  const [regacy, setRegacy] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/api/v1/drink/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setDrinkList(data.data);
      setRegacy(data.data);
    })();
  }, []);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleClick = () => {
    if (!search.length) {
      return setDrinkList(regacy);
    }
    setDrinkList((prev) =>
      prev.filter((drink: any) => drink.name.includes(search))
    );
  };

  useEffect(() => {
    (async () => {
      const { data } = await instance.get(
        `/api/v1/drink?category=${category}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setDrinkList(data.data);
      setRegacy(data.data);
    })();
  }, [category]);

  return (
    <div className="w-screen px-6 py-[47px] pb-[100px]">
      <Header />
      <p className="font-semibold text-gray-800 title-sm mt-[20px]">
        당신의 즐거움을 위한
        <br /> 특별한 주류 추천을 받아보세요.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full h-[56px] border border-gray-200 rounded-[12px] flex justify-between pr-4 overflow-hidden items-center mt-5"
      >
        <input
          className="w-full h-full p-4 text-sm font-normal"
          placeholder="주류를 검색해보세요"
          value={search}
          onChange={({ target: { value } }) => setSearch(value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleClick();
          }}
        />
        <Search onClick={handleClick} type="submit" />
      </form>
      <div className="flex gap-3 mt-5 overflow-scroll">
        {alcoholArray.map((item) => {
          return (
            <div
              key={item}
              className={classNames(
                "px-5 py-3 rounded-[12px] border border-gray-300 whitespace-nowrap cursor-pointer",
                category === item &&
                  "!border-[#6336E2] border-[1px] text-[#6336E2]"
              )}
              onClick={() => {
                if (category === item) {
                  setCategory("");
                  return;
                }
                setCategory(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-x-[19px] gap-y-[16px] mt-6">
        {category
          ? drinkList
              .filter((drink: any) => drink.category === category)
              .slice(0, Math.round(drinkList.length / 2))
              .map((drink: any) => (
                <FoodCard
                  onClick={() => navigate(`/drink/${drink.id}`)}
                  key={drink.id}
                  src={drink.image}
                  name={drink.name}
                  price={drink.price}
                />
              ))
          : drinkList
              .slice(0, Math.round(drinkList.length / 2))
              .map((drink: any) => (
                <FoodCard
                  onClick={() => navigate(`/drink/${drink.id}`)}
                  key={drink.id}
                  src={drink.image}
                  name={drink.name}
                  price={drink.price}
                />
              ))}
        <div
          onClick={() => navigate("/snack")}
          className="w-full h-[84px] rounded-[12px] bg-black p-5 col-span-2 flex items-center justify-between"
        >
          <p className="font-semibold text-white text-md">
            내가 고른 술이랑
            <br />잘 어울리는 안주 보러가기
          </p>
          <RightArrow_ />
        </div>
        {drinkList
          .slice(Math.round(drinkList.length / 2), drinkList.length)
          .map((drink: any) => (
            <FoodCard
              onClick={() => navigate(`/drink/${drink.id}`)}
              key={drink.id}
              src={drink.image}
              name={drink.name}
              price={drink.price}
            />
          ))}
      </div>
      <BottomNavigation current="주류추천" />
    </div>
  );
}
