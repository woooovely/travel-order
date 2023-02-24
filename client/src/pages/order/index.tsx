import React, { useContext } from "react";
import styled from 'styled-components'
import Type from "../../components/type";
import { OrderContext } from "../../context";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
    const [orderData] = useContext<any>(OrderContext);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Travel Products</h1>
            <div>
                <Type orderType="products" />
            </div>
            <OptionContainer>
                <Options>
                    <Type orderType="options" />
                </Options>
                <Options>
                    <h2>총 합계: {orderData.totals.total}</h2>
                    <button onClick={() => navigate("/check")}>주문하기</button>
                </Options>
            </OptionContainer>
        </div>
    )
}

export default OrderPage;

const Options = styled.div`
    width: 50%;
`

const OptionContainer = styled.div`
    display: flex;
    margin-top: 20px;
`