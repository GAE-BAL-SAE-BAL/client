import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 200px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: var(--Black, #000);
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
`;

export const Desc = styled.p`
  color: var(--Gray-2, #747674);
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 20px;
`;
