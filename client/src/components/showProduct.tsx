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
      <p>{name}</p>
    </Container>
  );
};

export default ShowProducts;

const Container = styled.div`
  width: 380px;
  height: 367px;
  border: 1px solid black;
  margin-left: 30px;
`

const Images = styled.img`
  width: 75%;
  padding-left: 45px;
`;
