import styled from "styled-components";
import Header from "../../components/header";

const AboutDortmund = () => {
  return (
    <>
      <Header />
      <ProductContainer>
        <ProductTitle>독일 | 도르트문트 패키지</ProductTitle>
        <ProductDetail>
          <Details>맥주 산업</Details>
          <Details>지리적 중심부</Details>
          <Details>대도시권</Details>
        </ProductDetail>
        <Images src="http://localhost:4000/images/germany.jpeg" />
        <MidSpace />
        <DetailTitle>설명</DetailTitle>
        <Description>
          독일 노르트라인베스트팔렌주에 위치한 도시. 루르 공업지역에서도 가장
          핵심적인 역할을 담당하는 곳으로, 현재 독일 내에서 9번째로 큰 도시이다.
        </Description>
      </ProductContainer>
    </>
  );
};

export default AboutDortmund;

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
  padding-left: 450px;
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
