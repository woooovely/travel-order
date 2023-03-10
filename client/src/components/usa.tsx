import styled from "styled-components";
import { ImageProps } from "../types/show";

const UsaWashington = ({ imagePath }: ImageProps) => {
  return (
    <>
      <Image src={`http://localhost:4000/${imagePath}`} alt="상품 이미지" />
    </>
  );
};

export default UsaWashington;

const Image = styled.img`
  width: 50%;
`;
