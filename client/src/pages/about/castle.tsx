import styled from "styled-components";
import Header from "../../components/header";

const AboutCastleTown = () => {
  return (
    <>
      <Header />
      <ProductContainer>
        <ProductTitle>포틀랜드 | 캐슬타운 패키지</ProductTitle>
        <ProductDetail>
          <Details>영국</Details>
          <Details>서유럽</Details>
          <Details>소규모 지역</Details>
        </ProductDetail>
        <Images
          src="http://localhost:4000/images/portland.jpeg"
          alt="상품 이미지"
        />
        <MidSpace />
        <DetailTitle>설명</DetailTitle>
        <Description>
          오리건 주 북서쪽에 위치한, 주 내 최대도시이다. 윗동네인 워싱턴 주
          시애틀과 더불어 태평양에 가까운 미국의 도시다. 순수 포틀랜드 시의
          인구는 약 65만 명이며, 광역권으로는 약 250만의 대도시.
        </Description>
      </ProductContainer>
    </>
  );
};

export default AboutCastleTown;

const Space = styled.div`
  height: 120px;
`;

const Description = styled.div`
  width: 500px;
  margin-left: 210px;
  font-size: 19px;
`;

const DetailTitle = styled.p`
  font-size: 23px;
  margin-right: 240px;
  font-weight: 600;
`;

const MidSpace = styled.div`
  height: 50px;
`;

const Images = styled.img`
  width: 70%;
  display: flex;
  padding-left: 420px;
`;

const Details = styled.li`
  margin-left: 20px;
`;

const ProductDetail = styled.p`
  display: flex;
  list-style: none;
  padding-right: 93px;
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
