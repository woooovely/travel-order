import React from "react";
import styled from "styled-components";

interface ProductProps {
  name: string;
  imagePath: string;
  description: string
  updateItemCount: (name: string, currentValue: string) => any;
}

const Products = ({ name, imagePath, description , updateItemCount }: ProductProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateItemCount(name, e.target.value);
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
          max="50"
          defaultValue={0}
          onChange={handleChange}
        />
        <p>{description}</p>
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
