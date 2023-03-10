import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';

const AboutWashington = () => {
    return (
        <>
          <Header />
          <ProductContainer>
            <ProductTitle>미국 | 위싱턴 D.C. 패키지</ProductTitle>
          </ProductContainer>
        </>
    )
}

export default AboutWashington;

const ProductContainer = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
`

const ProductTitle = styled.p`
    font-size: 25px;
    font-weight: 600;
`