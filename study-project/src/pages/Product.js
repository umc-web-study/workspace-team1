import React from 'react'
import styled from 'styled-components'
import ProductImg from '../assets/macbook_air.jpg'
import ProductInfo from '../components/ProductInfo'
import ProductContent from '../components/ProductContent'
import SellerInfo from '../components/SellerInfo'

const ProductWrapper = styled.div`
  margin: 0 2.5rem 0 2.5rem;

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

  .horizontal_line {
    margin: 2rem 0 0 0;
    width: 100%;
    height: 0.1rem;
    background-color: #F3F3F3;
  }

  .vertical_line {
    margin: 1rem 0 2.5rem 0;
    width: 0.1rem;
    height: 20vh;
    background-color: #F3F3F3;
  }
`

const FlexDiv = styled.div`
  display: flex;
`

// 상품 데이터 모델
const productModel = {
  name: "애플 M1 맥북에어 13인치",
  category: "노트북/데스크탑",
  company: "애플",
  checkedNum: 8,
  likedNum: 2,
  price: "300,000",isPay: true,
  contents: "애플 M1 맥북에어 13인치 램 16기가, 저장공간 256기가입니다. 제품 상태 A급인 제품입니다! 편하게 연락 주세요 :)"
};

export default function Product() {
  return (
    <ProductWrapper>
      <FlexDiv>
        <img className='product_img' src={ProductImg} alt='중고 상품 이미지'/>
        <div className='info_div'>
          <ProductInfo 
            name={productModel.name} 
            category={productModel.category} 
            company={productModel.company}
            checkedNum={productModel.checkedNum} 
            likedNum={productModel.likedNum} 
            price={productModel.price}
            isPay={productModel.isPay}
          />
          <button className='check_fraud'>사기조회</button>
          <button className='go_buy'>구매하러 가기</button>
        </div>
        </FlexDiv>
        <hr className='horizontal_line'></hr>
        <FlexDiv>
          <ProductContent name={productModel.name} contents={productModel.contents}/>
          <div className='vertical_line'></div>
          <SellerInfo />
        </FlexDiv>
        
        
    </ProductWrapper>
  )
}
