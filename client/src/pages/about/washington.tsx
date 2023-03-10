import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import useTitle from '../../hook/title';

const AboutWashington = () => {
    const titleUpdater = useTitle('불러오는 중...')
    setTimeout(() => titleUpdater('미국 워싱턴 D.C. 7일 | Your Travels'))

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