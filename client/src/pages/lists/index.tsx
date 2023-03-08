import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import useTitle from "../../hook/title";
import axios from "axios";
import ShowProducts from "../../components/showProduct";


const ProductLists = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("시선 집중🔥 | Your Travels"));

  const [items, setItems] = useState<string[] | number[]>([]);
  const [error, setError] = useState<boolean>(false);
  

  useEffect(() => {
    loadItems();
  });

  const loadItems = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      setItems(response.data);
    } catch (error: any) {
      setError(error);
    }
  };

  const products = items.map((item: any) => (
    <ShowProducts
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      url={item.url}
    />
  ));

  if (error) {
    return (
        <h2>에러가 발생하였습니다!</h2>
    )
  }

  return (
    <div>
      <Header />
      <ListsTitle>시선 집중🔥</ListsTitle>
      <Container>{products}</Container>
    </div>
  );
};

export default ProductLists;

const Container = styled.div`
    display: flex;
`

const ListsTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-left: 30px;
`;
