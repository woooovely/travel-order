import React from 'react';
import styled from 'styled-components';

const Header = () => {

    return (
        <>
          <HeaderContainer>
            <LogoContainer>
                <LogoText>Your Travels</LogoText>
            </LogoContainer>
            <div>
                <CategoryContainer>
                    <Categories>홈</Categories>
                    <Categories>상품 조회</Categories>
                    <Categories>주문하기</Categories>
                </CategoryContainer>
            </div>
          </HeaderContainer>
        </>
    )
}

export default Header;

const Categories = styled.li`
    margin-left: 20px;
`

const CategoryContainer = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: -50px;
`

const LogoContainer = styled.div`
    padding: 5px;
    margin-left: 20px;
`

const LogoText = styled.p`
    font-size: 25px;
    font-weight: 550;
`

const HeaderContainer = styled.header`
    height: 90px;
    border-bottom: 1px solid #B6B6B6;
`