import { useRef, useState, useEffect } from "react";
import RightArrow_ from "../../assets/RightArrow_";
import Search from "../../assets/Search";
import ProductCard from "../../components/ProductCard";
import useDebounce from "../../hook/useDebounce";
import Header from "../../components/Header";
import BottomNavigation from "../../components/BottomNavigation";
import { instance } from "../../api";
import FoodCard from "../../components/FoodCard";

export default function DrinkPage() {
  const [search, setSearch] = useState<string>("");
  const [drinkList, setDrinkList] = useState<any[]>([]);
  const [selectCategory, setSelectCategory] = useState<string>("");
  const debounceState = useDebounce(search, 200);
  const alcoholArray = [
    "국내맥주",
    "국외맥주",
    "소주",
    "과일주",
    "브랜디",
    "와인",
    "위스키",
    "샴페인",
    "막거리",
    "복분자",
  ];

  const GetDrinkListCategory = async (category: any): Promise<any[]> => {
    try {
      const {
        data: { data },
      } = await instance.get(`/api/v1/drink?category=${category}`);
      return data;
    } catch (err: any) {
      alert(err.response.data.message);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetDrinkListCategory(selectCategory);
      setDrinkList(data);
    };
    fetchData();
  }, [selectCategory]);

  const GetDrinkList = async (): Promise<any[]> => {
    try {
      const {
        data: { data },
      } = await instance.get("/api/v1/drink/all");
      return data;
    } catch (err: any) {
      alert(err.response.data.message);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetDrinkList();
      setDrinkList(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setDrinkList((prev) => prev);
  }, [debounceState]);

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
        {alcoholArray.map((item, idx) => {
          return (
            <div
              key={idx}
              className="px-5 py-3 rounded-[12px] border whitespace-nowrap cursor-pointer"
              style={{
                borderColor: selectCategory === item ? "#6336E2" : "#B9BBB9",
                color: selectCategory === item ? "#6336E2" : "#474847",
              }}
              onClick={() => {
                if (selectCategory === item) {
                  setSelectCategory("");
                  return;
                }
                setSelectCategory(item);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 gap-x-[19px] gap-y-[16px] mt-6">
        {drinkList.length !== 0 &&
          drinkList.map(({ image, name, price, id }: any, idx: number) => {
            if (!name.includes(debounceState)) return <></>;
            return (
              <>
                <FoodCard key={id} src={image} price={price} name={name} />
                {idx === 3 && (
                  <div className="w-full h-[84px] rounded-[12px] bg-black p-5 col-span-2 flex items-center justify-between">
                    <p className="font-semibold text-white text-md">
                      내가 고른 안주랑
                      <br />잘 어울리는 주류 보러가기
                    </p>
                    <RightArrow_ />
                  </div>
                )}
              </>
            );
          })}
      </div>
      <BottomNavigation current="주류추천" />
    </div>
  );
}
