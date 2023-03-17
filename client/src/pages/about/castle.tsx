import styled from 'styled-components';
import Header from '../../components/header';

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
          </ProductContainer>
        </>
    )
}

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


