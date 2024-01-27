import React from "react";
import * as S from "./style";
import LoginHeader from "../../Components/LoginHeader";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <S.Layout>
      <LoginHeader />
      <S.Info>
        <S.Inputs>
          <S.Title>아이디</S.Title>
          <S.Input placeholder="아이디를 입력해주세요." />
        </S.Inputs>
        <S.Inputs>
          <S.Title>비밀번호</S.Title>
          <S.Input placeholder="비밀번호를 입력해주세요." />
        </S.Inputs>
        <S.ForgotPassword>
          <S.Desc>비밀번호를 잊었나요?</S.Desc>
          <Link to="">
            <S.Find>비밀번호 찾기</S.Find>
          </Link>
        </S.ForgotPassword>
      </S.Info>
      <S.Submit>
        <S.NextButton>다음</S.NextButton>
        <S.Or>또는</S.Or>
        <Link to="">
          <S.ToRegister>회원가입</S.ToRegister>
        </Link>
      </S.Submit>
    </S.Layout>
  );
};

export default Login;
