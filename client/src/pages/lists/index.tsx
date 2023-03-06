import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import useTitle from '../../hook/title';

const ProductLists = () => {
    const titleUpdater = useTitle('불러오는 중...')
    setTimeout(() => titleUpdater('상품 조회 | Your Travels'))

    return (
        <div>
            <Header />
            <ListsTitle>시선 집중</ListsTitle>
        </div>
    )
}

export default ProductLists;

const ListsTitle = styled.p`
    font-size: 30px;
    font-weight: 600;
    margin-left: 30px;
`