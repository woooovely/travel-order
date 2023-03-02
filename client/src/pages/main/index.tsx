import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <>
          <TopSpace />
          <TextContainer>
            <p>당신만의<br />특별한 여행을<br />주문하고 즐겨보세요</p>
          </TextContainer>
          <BtnContainer>
            <MoveBtn onClick={() => navigate("/order")}>
                보러가기
            </MoveBtn>
          </BtnContainer>
        </>
    )
}

export default MainPage;

const MoveBtn = styled.button`
    width: 192px;
    height: 72px;
    background-color: black;
    border: none;
    border-radius: 40px;
    font-size: 25px;
    color: white;
    transition: background-color 0.6s ease-in-out;
    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        cursor: pointer;
    }
`

const BtnContainer = styled.div`
    width: 192px;
    height: 72px;
    margin: 0 auto;
`

const easeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(20px);
    }
    100% {
        opacity: 1;
    }
`

const TopSpace = styled.div`
    height: 400px;
`

const TextContainer = styled.div`
    margin-left: 50px;
    p {
        font-size: 70px;
        font-weight: 600;
    }
    animation: ${easeIn} 1s ease-in;
`