import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/header";
import useTitle from "../../hook/title";
import axios from "axios";
import ShowProducts from "../../components/showProduct";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const ProductLists = () => {
  const titleUpdater = useTitle("불러오는 중...");
  setTimeout(() => titleUpdater("상품 조회 | Your Travels"));

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
      description={item.description}
    />
  ));

  return (
    <div>
      <Header />
      <ListsTitle>시선 집중</ListsTitle>
      <div>{products}</div>
    </div>
  );
};

export default ProductLists;

const ListsTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-left: 30px;
`;
