import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import LeftArrowBack from "../../assets/LeftArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from "../../api";
import { numberWithCommas } from "../../helpers/numberWithCommas.helper";
import BottomNavigation from "../../component/BottomNavigation";

const Detail = () => {
  const { pathname } = useLocation();
  const [detail, setDetail] = useState<any>();
  const type = pathname.substring(1, 6);
  const id = pathname.substring(7, pathname.length);
  const navigate = useNavigate();

  console.log(type);
  console.log(id);

  useEffect(() => {
    console.log(111);
    (async () => {
      const { data } = await instance.get(`/api/v1/${type}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setDetail(data.data);
    })();
  }, []);

  return (
    <div className="w-full px-[23px] gap-2 py-12 pb-72 flex flex-col">
      {detail && (
        <>
          <Header />
          <hgroup
            onClick={() => navigate(`/${type}`)}
            className="flex gap-[12px] items-center pl-1 mt-6"
          >
            <LeftArrowBack />
            <span>상품소개</span>
          </hgroup>
          <img src={detail.image} alt="images" />
          <hgroup className="flex items-center gap-[4px]">
            <span className="mt-6 text-[20px] font-[600]">{detail.name}</span>
            <span className="text-[14px] text-[#aaa] mt-auto mb-[2px]">
              {detail.category}
            </span>
          </hgroup>
          <span className="text-[18px] font-[600] text-[#6336E2]">
            {numberWithCommas(detail.price)}원
          </span>
          <div className="mb-3" />
          <div className="w-full h-[1px] bg-[#D9D9D9]" />
          <span className="mt-4">상품 상세 정보</span>
          <span className="whitespace-pre-wrap">{detail.data}</span>
          <div className="mb-3" />
          <div className="w-full h-[1px] bg-[#D9D9D9]" />
          <span className="mt-4">상품 상세 설명</span>
          <span className=" whitespace-pre-wrap">{detail.description}</span>
          <a
            href={detail.link}
            rel="noreferrer"
            target="_blank"
            className="fixed flex items-center justify-center left-[7px] bottom-[100px] w-[96vw] p-[13px] rounded-[12px] text-white bg-[#6336E2]"
          >
            구매하기
          </a>
        </>
      )}
      <BottomNavigation current={type === "drink" ? "주류추천" : "안주추천"} />
    </div>
  );
};

export default Detail;
