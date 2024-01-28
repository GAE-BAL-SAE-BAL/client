import React, { useState } from "react";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";

import LoginHeader from "../../component/LoginHeader";
import { instance } from "../../api";

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    userAccount: "",
    password: "",
  });

  const handleClickLogin = async () => {
    try {
      const { data } = await instance.post("/api/v1/user/login", formState);
      alert("로그인에 성공했어요!");
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
      localStorage.setItem("userAccount", data.data.userAccount);
      navigate("/");
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <S.Layout>
      <LoginHeader />
      <S.Info>
        <S.Inputs>
          <S.Title>아이디</S.Title>
          <S.Input
            name="userAccount"
            placeholder="아이디를 입력해주세요."
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <S.Icon></S.Icon>
        </S.Inputs>
        <S.Inputs>
          <S.Title>비밀번호</S.Title>
          <S.Input
            name="password"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <S.Icon></S.Icon>
        </S.Inputs>
        <S.ForgotPassword>
          <S.Desc>비밀번호를 잊었나요?</S.Desc>
          <Link to="">
            <S.Find>비밀번호 찾기</S.Find>
          </Link>
        </S.ForgotPassword>
      </S.Info>
      <S.Submit>
        <S.NextButton
          onClick={handleClickLogin}
          disabled={!formState.userAccount || !formState.password}
        >
          로그인
        </S.NextButton>
        <S.Or>또는</S.Or>
        <Link to="/signup/step/1">
          <S.ToRegister>회원가입</S.ToRegister>
        </Link>
      </S.Submit>
    </S.Layout>
  );
};

export default Login;
