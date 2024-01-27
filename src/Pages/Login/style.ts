import styled from "styled-components";

export const Layout = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Inputs = styled.div`
  width: 100%;
`;

export const Title = styled.p``;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #d1d2d1;
  background: #fff;
  &:hover {
    border: 1px solid #6336e2;
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Desc = styled.p`
  color: var(--Gray-2, #747674);
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const Find = styled.p`
  color: var(--colors-Gray-gray-800, #474847);
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: underline;
`;

export const Submit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 180px;
`;

export const NextButton = styled.button`
  width: 100%;
  border-radius: 12px;
  background: var(--colors-Gray-gray-200, #d1d2d1);
  padding: 13px 22px;
  color: #a2a4a2;
`;

export const Or = styled.p`
  color: var(--Gray-1, #a2a4a2);
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ToRegister = styled.p`
  color: var(--colors-Gray-gray-800, #474847);
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;
