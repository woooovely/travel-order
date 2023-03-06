import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <LogoText onClick={() => navigate("/")}>Your Travels</LogoText>
        </LogoContainer>
        <div>
          <CategoryContainer>
            <Categories>
              <LinkStyle to="/">홈</LinkStyle>
            </Categories>
            <Categories>
              <LinkStyle to="/lists">상품 조회</LinkStyle>
            </Categories>
            <Categories>
              <LinkStyle to="/order">주문하기</LinkStyle>
            </Categories>
          </CategoryContainer>
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;

const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Categories = styled.li`
  margin-left: 50px;
  font-size: 18px;
  &:hover {
    opacity: 0.6;
  }
`;

const CategoryContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: -53px;
`;

const LogoContainer = styled.div`
  padding: 5px;
  margin-left: 20px;
`;

const LogoText = styled.p`
  font-size: 25px;
  font-weight: 550;
`;

const HeaderContainer = styled.header`
  height: 90px;
  border-bottom: 1px solid #b6b6b6;
`;
