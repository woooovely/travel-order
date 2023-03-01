import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
    return (
        <>
          <TopSpace />
          <TextContainer>
            <p>당신만의<br />특별한 여행을<br />주문하고 즐겨보세요</p>
          </TextContainer>
        </>
    )
}

export default MainPage;

const TopSpace = styled.div`
    height: 400px;
`

const TextContainer = styled.div`
    margin-left: 50px;
    p {
        font-size: 70px;
        font-weight: 600;
    }
`