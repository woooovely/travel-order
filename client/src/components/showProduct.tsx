import React from "react";
import styled from "styled-components";

interface ShowProps {
  name: string;
  imagePath: string;
}

const ShowProducts = ({ name, imagePath }: ShowProps) => {
  return (
    <div>
      <Images
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} 패키지`}
      />
      <p>{name}</p>
    </div>
  );
};

export default ShowProducts;

const Images = styled.img`
  width: 75%;
`;
