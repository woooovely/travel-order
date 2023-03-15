import Header from "../../components/header";
import styled from "styled-components";
import useTitle from "../../hook/title";

const AboutLondon = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("영국 런던 7일 | Your Travels"));

  return (
    <>
      <Header />
      <ProductContainer>
        <ProductTitle>영국 | 런던 패키지</ProductTitle>
        <ProductDetail>
          <Details>글로벌 도시</Details>
          <Details>인기 상품</Details>
          <Details>북런던</Details>
        </ProductDetail>
        <Images src="http://localhost:4000/images/england.jpeg" />
        <MidSpace />
        <DetailTitle>설명</DetailTitle>
        <Description>
          런던(London)은 잉글랜드, 나아가 영국의 수도이자 최대도시이다.
          영국의 정치, 경제, 문화, 교통의 중심지이면서 전세계, 특히 영연방
          국가들에도 큰 영향력을 끼친다. 뉴욕, 도쿄와 함께 세계 3대 도시로
          불리기도 한다. 또한 런던은 다문화 도시로, 심지어 몇몇 기사에서는
          뉴욕시보다도 좀 더 많은 다양한 집단이 모여사는 도시로 꼽히기도 한다.
        </Description>
      </ProductContainer>
    </>
  );
};

export default AboutLondon;

const Space = styled.div`
  height: 120px;
`;

const Description = styled.div`
  width: 500px;
  margin-left: 290px;
  font-size: 19px;
`;

const DetailTitle = styled.p`
  font-size: 23px;
  margin-right: 170px;
  font-weight: 600;
`;

const MidSpace = styled.div`
  height: 50px;
`;

const Images = styled.img`
  width: 70%;
  display: flex;
  padding-left: 500px;
`;

const Details = styled.li`
  margin-left: 20px;
`;

const ProductDetail = styled.p`
  display: flex;
  list-style: none;
  padding-right: 15px;
  margin-left: 40px;
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
