import React from 'react'
import styled from 'styled-components'

const ProductInfoWrapper = styled.div`
    .category {
        color: gray;
        font-size: 0.8rem;
    }

    .name {
        color: black;
        font-size: 1rem;
        margin: 0.3rem 0 0 0;
    }

    .checked_num {
        color: gray;
        font-size: 0.8rem;
        margin: 0.3rem 0 0 0;
    }

    .price_container {
        display: flex;
    }

    .price {
        color: black;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0.3rem 0 0 0;
    }

    .pay {
        margin: 0.5rem 0 0 0.5rem;
        background-color: #0072BE;
        width: 2rem;
        height: 1.5rem;
        font-size: 1rem;
        text-align: center;
        color: white;
        font-weight: bold;
        corner-radius: 1rem;
        border-radius: 0.2rem;
    }

    .market_price {
        margin: 1rem 0 1.3rem 0;
    }

    .market_price_div {
        width: 30rem;
        height: 15rem;
        background-color: #F3F3F3;
        text-align: center;
        line-height: 15rem;
        border-radius: 1.5rem;
    }
`

export default function ProductInfo(props) {
    const isPay = props.isPay

    return (
        <ProductInfoWrapper>
            <p className='category'>홈 > {props.category} > {props.company}</p>
            <p className='name'>{props.name}</p>
            <p className='checked_num'>조회 {props.checkedNum} ∙ 찜 {props.likedNum} ∙ 배송비 별도</p>
            <div className='price_container'>
                <p className='price'>{props.price}원</p>
                { isPay ? <div className='pay'>Pay</div> : null }
            </div>
            <p className='market_price'>시세조회 ({props.company})</p>
            <div className='market_price_div'>시세 데이터가 아직 충분하지 않아요.</div>
        </ProductInfoWrapper>
    )
}
