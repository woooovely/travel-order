import React from "react";
import styled from "styled-components";

interface ShowProps {
  name: string;
  imagePath: string;
}

const ShowProducts = ({ name, imagePath }: ShowProps) => {
  return (
    <Container>
      <Images
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} 패키지`}
      />
      <ProductName>
        {name} <b style={{ color: "red" }}>7일</b>
      </ProductName>
      <Price>3,870,000 <span style={{ fontSize: '18px' }}>원</span></Price>
    </Container>
  );
};

export default ShowProducts;

const Price = styled.p`
    font-size: 30px;
    padding-left: 45px;
    font-weight: 600;
`

const ProductName = styled.p`
  padding-left: 45px;
  font-size: 18px;
  font-weight: 500;
`;

const Container = styled.div`
  width: 380px;
  height: 367px;
  border: 1px solid black;
  margin-left: 30px;
  border-radius: 5px;
  border: 1px solid #dedede;
`;

const Images = styled.img`
  width: 75%;
  padding-left: 45px;
  padding-top: 20px;
`;
