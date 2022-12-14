import React from 'react'
import styled from 'styled-components'
import ProductImg from '../assets/macbook_air.jpg'

const UserProductsWrapper = styled.div`
    margin: 0 0 0 1rem;
    width: 6rem;
    height: 8.5rem;

    .product_img {
        display: absolute;
        width: 5rem;
        height: 5rem;
        border-radius: 0.3rem;
        background-size: cover;
    }
    .price {
        font-weight: bold;
    }
    .name {
        width: 5rem;
        height: 1rem;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export default function UserProducts() {
  return (
    <UserProductsWrapper>
        <img className='product_img' src={ProductImg} alt='중고 상품 이미지'/>
        <p className='price'>220,000원</p>
        <p className='name'>LG 울트라북 sdfdfdfdfd</p>
    </UserProductsWrapper>
  )
}
