import React from "react";
import * as S from "./style";

const LoginHeader = () => {
  return (
    <S.Layout>
      <S.Title>술래잡기</S.Title>
      <S.Desc>
        나만의 술 추천 받고
        <br /> 매달 나를 위한 선물을 만들어보세요.
      </S.Desc>
    </S.Layout>
  );
};

export default LoginHeader;
