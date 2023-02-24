import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context";
import ErrorBanner from "./error";
import Options from "./options";
import Products from "./product";

interface OrderProps {
  orderType: string;
}

const Type = ({ orderType }: OrderProps) => {
  const [items, setItems] = useState<string[] | number[]>([]);
  const [error, setError] = useState(false);
  const [orderData, updateItemCount] = useContext<any>(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType: string) => {
    try {
      const res = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(res.data);
    } catch (error: any) {
      setError(error);
    }
  };

  const ItemComponent = orderType === "products" ? Products : Options;

  const optionsItems = items.map((item: any) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName: string, newItemCount: any) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));

  if (error) {
    return <ErrorBanner message="알 수 없는 에러입니다." />;
  }
};
