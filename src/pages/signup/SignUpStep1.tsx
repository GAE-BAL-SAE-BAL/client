import React from "react";
import { useRef } from "react";
import { useState } from "react";
import LeftArrow from "../../assets/LeftArrow";
import Delete from "../../assets/Delete";

export default function SignUpStep1() {
  const [idState, setIdState] = useState<string>("");
  const inputRef = useRef<HTMLDivElement>(null);
  return (
    <div className="pt-[67px] px-6 flex flex-col justify-between h-screen pb-[42px]">
      <div>
        <div className="flex w-full gap-2 h-[30px] items-center cursor-pointer">
          <LeftArrow />
          <p className="text-sm text-[#828387]">돌아가기</p>
        </div>
        <div className="mt-5">
          <p className="font-bold title-md">아이디를 입력하세요</p>
          <p className="font-medium caption text-[#B9B9BC] mt-2">
            서비스 사용을 위해 아이디를 입력해 주세요.
          </p>
          <div className="flex gap-1 mt-[18px]">
            <div className="w-12 h-1 bg-[#6336E2] rounded-[10px]" />
            <div className="w-12 h-1 bg-[#E8E8E9] rounded-[10px]" />
            <div className="w-12 h-1 bg-[#E8E8E9] rounded-[10px]" />
          </div>
        </div>
        <div className="mt-[27px]">
          <p className="font-medium caption text-[#3D3D3E]">아이디</p>
          <div
            className="w-full border rounded-[12px] mt-2 flex pr-4 border-[#D0D1D2]"
            ref={inputRef}
          >
            <input
              className="w-full h-full outline-none p-4 rounded-[12px]"
              placeholder="아이디를 입력해주세요"
              value={idState}
              onChange={(e) => {
                setIdState(e.target.value);
              }}
              onFocus={() => {
                if (inputRef.current) {
                  inputRef.current.style.borderWidth = "1px";
                  inputRef.current.style.borderColor = "#6336E2";
                }
              }}
              onBlur={() => {
                if (inputRef.current)
                  inputRef.current.style.borderColor = "#D0D1D2";
              }}
            />
            {idState && (
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  setIdState("");
                }}
              >
                <Delete />
              </div>
            )}
          </div>
        </div>
      </div>
      <button className="w-full px-[22px] py-[13px] bg-[#6336E2] text-white rounded-[12px]">
        다음
      </button>
    </div>
  );
}
