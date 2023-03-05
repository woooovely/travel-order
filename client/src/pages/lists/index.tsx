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
        </div>
    )
}

export default ProductLists;