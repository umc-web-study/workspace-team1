import React from 'react'
import styled from 'styled-components'
import ProductImg from '../assets/macbook_air.jpg'
import ProductInfo from '../components/ProductInfo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ProductWrapper = styled.div`
  margin: 0 0 0 2.5rem;

  .product_img {
    margin-top: 1.6rem;
    width: 30rem;
    height: 30rem;
  }

  .info_div {
    margin: 1.6rem 0 0 3rem;
  }

  .check_fraud {
    margin: 1rem 0  0 0;
    background-color: #F3F3F3;
    width: 14.5rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    border-radius: 2rem;
  }

  .go_buy {
    margin: 1rem 0  0 1rem;
    background-color: #0072BE;
    width: 14.5rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    border-radius: 2rem;
  }
`

const FlexDiv = styled.div`
  display: flex;
`

// 상품 데이터 모델
const productModel = [
  {
      name: "애플 M1 맥북에어 13인치",
      category: "노트북/데스크탑",
      company: "애플",
      checkedNum: 8,
      likedNum: 2,
      price: "300,000",
      isPay: true
  }
]

export default function Product() {
  return (
    <ProductWrapper>
      <FlexDiv>
        <img className='product_img' src={ProductImg} alt='중고 상품 이미지'/>
        <div className='info_div'>
          { productModel.map(product => (
            <ProductInfo 
            name={product.name} 
            category={product.category} 
            company={product.company}
            checkedNum={product.checkedNum} 
            likedNum={product.likedNum} 
            price={product.price}
            isPay={product.isPay} />
            ))
          }
          <button className='check_fraud'>사기조회</button>
          <button className='go_buy'>구매하러 가기</button>
        </div>
        </FlexDiv>
    </ProductWrapper>
  )
}
