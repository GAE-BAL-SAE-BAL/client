import React, { useState } from "react";
import LeftArrow from "../../assets/LeftArrow";
import { useNavigate } from "react-router-dom";
import Eye from "../../assets/Eye";

const SignUpStep2 = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState("password");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  return (
    <div className="w-full h-[100vh] flex flex-col px-[23px] gap-8">
      <hgroup className="w-full flex items-center gap-3 mt-12">
        <LeftArrow />
        <span className="text-[18px] font-normal text-[#747674]">돌아가기</span>
      </hgroup>
      <hgroup className="flex flex-col h-full gap-[8px]">
        <h1 className=" font-[600] title-md">비밀번호를 입력해주세요</h1>
        <span className=" text-[14px] font-[500] text-[#B9B9BC]">
          비밀번호는 영문, 숫자, 특수문자 중 2개를 이용해주세요.{" "}
        </span>
        <div className="w-full flex h-[10px] items-center gap-[4px]">
          <div className="w-[48px] mt-auto h-[4px] bg-[#E8E8E9] rounded-full" />
          <div className="w-[48px] mt-auto h-[4px] bg-[#6336E2] rounded-full" />
          <div className="w-[48px] mt-auto h-[4px] bg-[#E8E8E9] rounded-full" />
        </div>
        <main className="mt-[54px] h-full flex flex-col gap-[20px]">
          <div className="flex flex-col rounded-[12px] gap-[4px]">
            <span className="text-black text-[14px] font-[500]">비밀번호</span>
            <div className="relative h-[56px]">
              <input
                onChange={({ target: { value } }) => setPassword(value)}
                value={password}
                type="password"
                // type={passwordVisible}
                placeholder="비밀번호를 입력해주세요."
                className="border-[1px] absolute w-full px-[16px] h-[56px] hover:border-[#6336E2] rounded-[12px] outline-none border-solid border-[#D1D2D1]"
              />
              {/* <Eye
                onClick={() =>
                  setPasswordVisible((prev) =>
                    prev === "password" ? "input" : "password"
                  )
                }
                className="absolute right-4 top-[16px]"
              /> */}
            </div>
          </div>
          <div className="flex flex-col rounded-[12px] gap-[4px]">
            <span className="text-black text-[14px] font-[500]">
              비밀번호 재확인
            </span>
            <div className="relative h-[56px]">
              <input
                onChange={({ target: { value } }) => setRepassword(value)}
                value={repassword}
                type={passwordVisible}
                placeholder="비밀번호를 다시 입력해주세요."
                className="border-[1px] w-full p-[16px] h-[56px] hover:border-[#6336E2] rounded-[12px] outline-none border-solid border-[#D1D2D1]"
              />
              <Eye
                onClick={() =>
                  setPasswordVisible((prev) =>
                    prev === "password" ? "input" : "password"
                  )
                }
                className="absolute right-4 top-[16px]"
              />
            </div>
          </div>
          <button
            onClick={() => navigate("/signup/step/3")}
            style={{
              marginLeft: "calc(-50vw + 50%)",
            }}
            className=" w-[100vw] mt-auto py-[13px] bg-[#6336E2] flex items-center justify-center text-white disabled:bg-[#D1D2D1] disabled:text-[#A2A4A2]"
            disabled={!(password.trim() && repassword.trim())}
          >
            다음
          </button>
        </main>
      </hgroup>
    </div>
  );
};

export default SignUpStep2;
