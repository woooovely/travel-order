import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
          <HeaderContainer>
            <LogoContainer>
                <LogoText>Your Travels</LogoText>
            </LogoContainer>
            <div>
                <CategoryContainer>
                    <Categories>
                        <LinkStyle to="/">홈</LinkStyle>
                    </Categories>
                    <Categories>
                        <Link to="/lists">상품 조회</Link>
                    </Categories>
                    <Categories>
                        <Link to="/order">주문하기</Link>
                    </Categories>
                </CategoryContainer>
            </div>
          </HeaderContainer>
        </>
    )
}

export default Header;

const LinkStyle = styled(Link)`
    
`

const Categories = styled.li`
    margin-left: 50px;
    font-size: 18px;
`

const CategoryContainer = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: -53px;
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