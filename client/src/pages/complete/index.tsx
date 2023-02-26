import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { OrderContext } from "../../context";
import { useNavigate } from 'react-router-dom';

const CompletePage = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [orderData] = useContext(OrderContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    orderCompleted(orderData);
  }, [orderData]);

  const orderCompleted = async (orderData: any) => {
    try {
      const res = await axios.post("http://localhost:4000/order", orderData);
      console.log("response", res);
      setOrderHistory(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showOrder = orderHistory.map((item: any, key: any) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  if (loading) {
    return <h2>불러오는 중...</h2>;
  } else {
    return (
      <Container>
        <h2>주문이 성공적으로 완료되었어요!</h2>
        <h3>주문한 상품</h3>
        <Table>
          <tbody>
            <tr>
              <th>주문번호</th>
              <th>가격</th>
            </tr>
            {showOrder}
          </tbody>
        </Table>
        <br />
        <button onClick={() => navigate("/")}>처음으로</button>
      </Container>
    );
  }
};

export default CompletePage;

const Table = styled.table`
  margin: auto;
`;

const Container = styled.div`
  text-align: center;
`;
