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
        <MidSpace />
        <DetailTitle>설명</DetailTitle>
        <Description>
          워싱턴 D.C.는 미국의 수도로 백악관과 국회의사당, 연방 대법원을 포함한
          많은 연방 정부의 주요 관청이 있으며 174개 국가의 대사관과 국제통화기금
          본부 등 각종 국제기구의 본부가 있는 국제 정치와 외교의 중심지이다.
        </Description>
        <Space />
      </ProductContainer>
    </>
  );
};

export default AboutWashington;


export const Space = styled.div`
  height: 120px;
`

export const Description = styled.div`
  width: 500px;
  margin-left: 210px;
  font-size: 19px;
`;

export const DetailTitle = styled.p`
  font-size: 23px;
  margin-right: 240px;
  font-weight: 600;
`;

export const MidSpace = styled.div`
  height: 50px;
`;

export const Images = styled.img`
  width: 70%;
  display: flex;
  padding-left: 400px;
`;

export const Details = styled.li`
  margin-left: 20px;
`;

export const ProductDetail = styled.p`
  display: flex;
  list-style: none;
  padding-right: 15px;
`;

export const ProductContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
`;

export const ProductTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`;
