import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { OrderContext } from "../../context";

const CompletePage = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderData] = useContext(OrderContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    orderCompleted(orderData);
  }, [orderData]);

  const orderCompleted = async (orderData: any) => {
    try {
      const res = await axios.post("http://localhost:4000/order", orderData);
      console.log('response', res);
      setOrderHistory(res.data);
      setLoading(true);
    } catch (error) {
        console.log(error);
    }
  };

  const showOrder = orderHistory.map((item: any, key: any) => (
    <tr key={item.orderNumber}>
        <td>{item.orderNumber}</td>
        <td>{item.title}</td>
    </tr>
  ))

  if (loading) {
    return (
        <h2>불러오는 중...</h2>
    )
  }
};

export default CompletePage;
