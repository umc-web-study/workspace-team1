import React from 'react'
import styled from 'styled-components'

const ProductContentWrapper = styled.div`
    .flex_div {
        display: flex;
    }
    .title {
        margin: 2rem 0 0 0;
        font-size: 1.2rem;
    }
    .warning_div {
        background-color: #6fb4e2;
        margin: 1.5rem 2.5rem 0 0;
        padding: 1rem 1rem 1rem 1rem;
        border-radius: 0.5rem;
        text-align: center;
    }
    .warning_msg {
        display: inline-block;
        width: 35rem;
        height: 3rem;
    }
    .trade_way {
        color: gray;
        font-size: 0.9rem;
        margin: 1.5rem 0 0 0;
    }
    .offline_meet, .delivery {
        width: 4rem;
        height: 1.8rem;
        line-height: 1.8rem;
        background-color: #F3F3F3;
        margin: 0.8rem 0.8rem 0 0;
        text-align: center;
        border-radius: 0.3rem;
    }

    .name {
        margin: 1.8rem 0 0 0;
        font-weight: bold;
    }
    .contents {
        margin: 1rem 0 0 0;
        width: 37rem;
    }

`

export default function ProductContent(props) {
  return (
    <ProductContentWrapper>
        <p className='title'>상품 내용</p>
        <div className='warning_div'>
            <p>거래 전 주의 사항</p>
            <p className='warning_msg'>판매자가 별도의 메신저로 결제링크를 보내거나 직거래(직접송금)을 유도하는 경우 사기일 가능성이 높으니 거래를 자제해 주시고 중고나라 고객센터로 신고해주시기 바랍니다.</p>
        </div>
        <p className='trade_way'>거래방법</p>
        <div className='flex_div'>
            <div className='offline_meet'>직거래</div>
            <div className='delivery'>택배거래</div>
        </div>
        <p className='name'>{props.name}</p>
        <p className='contents'>{props.contents}</p>
    </ProductContentWrapper>
  )
}
