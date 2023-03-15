import Header from '../../components/header';
import styled from 'styled-components';
import useTitle from '../../hook/title';

const AboutLondon = () => {
  const titleUpdater = useTitle('불러오는 중...')
  setTimeout(() => titleUpdater('영국 런던 7일 | Your Travels'));

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
          </ProductContainer>
        </>
    )
}

export default AboutLondon;

const Space = styled.div`
  height: 120px;
`

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
