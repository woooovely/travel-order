import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';

const AboutWashington = () => {
    return (
        <>
          <Header />
          <div>
            <ProductTitle>미국 | 위싱턴 D.C. 패키지</ProductTitle>
          </div>
        </>
    )
}

export default AboutWashington;

const ProductTitle = styled.p`
    font-size: 35px;
    font-weight: 600;
`