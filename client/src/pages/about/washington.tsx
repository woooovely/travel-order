import React from "react";
import styled from "styled-components";
import Header from "../../components/header";
import useTitle from "../../hook/title";

const AboutWashington = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("미국 워싱턴 D.C. 7일 | Your Travels"));

  return (
    <>
      <Header />
      <ProductContainer>
        <ProductTitle>미국 | 워싱턴 D.C. 패키지</ProductTitle>
        <ProductDetail>
          <Details>미국 북동부</Details>
          <Details>독립 행정구</Details>
          <Details>인기 상품</Details>
        </ProductDetail>
      </ProductContainer>
    </>
  );
};

export default AboutWashington;

const Details = styled.li``;

const ProductDetail = styled.ul`
  display: flex;
`;

const ProductContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-direction: column;
`;

const ProductTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
`;
