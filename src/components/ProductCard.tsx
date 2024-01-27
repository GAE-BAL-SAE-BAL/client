import React from "react";
import { styled } from "styled-components";

export default function ProductCard() {
  return (
    <div className="w-full">
      <div className="w-full h-[172px] rounded-[12px] overflow-auto">
        {/**이미지 */}
        <div className="w-full h-full bg-gray-100"></div>
      </div>
      <p className="mt-2 font-semibold text-md">10,000원</p>
      <Content className="mt-1 font-normal caption">
        하이트진로 켈리 맥주 잔 컵 프리미엄 스페셜 kelly
      </Content>
    </div>
  );
}

const Content = styled.p`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
