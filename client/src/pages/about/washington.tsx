import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import useTitle from "../../hook/title";
import { useQuery } from "react-query";
import axios from "axios";

const AboutWashington = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("미국 워싱턴 D.C. 7일 | Your Travels"));

  const [items, setItems] = useState<string[]>([]);

  const useLoadImages = () => {
    const { isLoading, error, isError }: any = useQuery(
      "load-image",
      async () => {
        const response = await axios.get("http://localhost:4000/products");
        setItems(response.data);
      }
    );

    if (isLoading) {
      return <h2>로딩중...</h2>;
    }

    if (isError) {
      return <h2>{error.message}</h2>;
    }
  };

  useLoadImages();

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
        <Images src="http://localhost:4000/images/america.jpeg" />
      </ProductContainer>
    </>
  );
};

export default AboutWashington;

const Images = styled.img`
  width: 70%;
  display: flex;
  padding-left: 400px;
`;

const Details = styled.li`
  margin-left: 20px;
`;

const ProductDetail = styled.p`
  display: flex;
  list-style: none;
  padding-right: 15px;
`;

const ProductContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
`;

const ProductTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`;
