import React from "react";
import styled from "styled-components";

interface ShowProps {
  name: string;
  imagePath: string;
  description: string;
}

const ShowProducts = ({ name, imagePath, description }: ShowProps) => {
  return (
    <div>
      <Images
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} 패키지`}
      />
      <p>{description}</p>
    </div>
  );
};

export default ShowProducts;

const Images = styled.img`
  width: 75%;
`;
