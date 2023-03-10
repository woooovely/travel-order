import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import useTitle from "../../hook/title";
import axios from "axios";
import ShowProducts from "../../components/showProduct";
import { useQuery } from "react-query";

const ProductLists = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("시선 집중🔥 | Your Travels"));

  const [items, setItems] = useState<string[]>([]);

  const useLoadItems = () => {
    const { isLoading, isError, error }: any = useQuery(
      "load-items",
      async () => {
        const response = await axios.get("http://localhost:4000/products");
        setItems(response.data);
      }
    );

    if (isError) {
      return <div>{error.message}</div>;
    }

    if (isLoading) {
      return <h2>로딩중...</h2>;
    }
  };

  useLoadItems();

  const products = items.map((item: any) => (
    <ShowProducts
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      url={item.url}
    />
  ));


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
`;

const ListsTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-left: 30px;
`;
