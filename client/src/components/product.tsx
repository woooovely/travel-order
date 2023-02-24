import React from "react";
import styled from "styled-components";

interface ProductProps {
  name: string;
  imagePath: string;
  updateItemCount: (name: string, currentValue: string) => any;
}

const Products = ({ name, imagePath, updateItemCount }: ProductProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    updateItemCount(name, currentValue);
  };

  return (
    <Container>
      <Images
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
      />
      <Form>
        <Label>{name}</Label>
        <InputQuantitiy
          type="number"
          name="quantitiy"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </Form>
    </Container>
  );
};

export default Products;

const InputQuantitiy = styled.input`
  margin-left: 7px;
`;

const Label = styled.label`
  text-align: right;
`;

const Form = styled.form`
  margin-top: 10px;
`;

const Container = styled.div`
  text-align: center;
`;

const Images = styled.img`
  width: 75%;
`;
