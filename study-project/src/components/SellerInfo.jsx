import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import UserProducts from './UserProducts';

const SellerInfoWrapper = styled.div`
    width: 30rem;
    height: 50rem;

    .scrolled_div {
        display: flex;
        width: 35rem;
        padding: 20px;
        overflow: scroll;
        overflow: auto;
        white-space: nowrap;
    }
    .user_info {
        margin: 2rem 0 0 1.5rem;
        font-size: 1.2rem;
    }

    .grid_container { 
        display: grid;
        grid: auto / 10rem 15rem;
    }
    .grid_container, .profile {
        grid-row: 1 / span 2;
    }
    .profile {
        margin: 1rem 0 0 1.5rem;
        width: 3rem;
        height: 3rem;
        padding: 0 0 1rem 1rem;
    }
    .username {
        font-weight: bold;
        font-size: 1.2rem;
    }
    .level {
        color: gray;
        font-size: 1rem;
    }

    .rate_container {
        display: inline;
        margin: 1rem 0 0 1.5em;
    }

    .total_rate {
        margin: 0 0 0 0.5rem;
    }
    .review {
        color: gray;
    }
    .arrow_right {
        margin: 0 0 0 0.5rem;
    }
    .on_sale {
        margin: 1.5rem 0 0 1.5em;
    }
`

// 유저 데이터 모델
const userModel = {
    name: "서서리",
    level: "실버 Lv.1",
    temperature: "40°C"
};

export default function SellerInfo() {
  return (
    <SellerInfoWrapper>
        <p className='user_info'>유저 정보</p>
        <div class="grid_container">
            <FontAwesomeIcon className='profile' icon={faUser} />
            <p className='username'>{userModel.name}</p>
            <p className='level'>{userModel.level}{' ∙ 친절 온도 '}{userModel.temperature}</p>
        </div>
        <div className='rate_container'>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FFB601'}} className="rate"/>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FFB601'}} className="rate"/>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FFB601'}} className="rate"/>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FFB601'}} className="rate"/>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FFB601'}} className="rate"/>
        </div>
        <span className='total_rate'>5/5</span>
        <span className='review'> ∙ 1개의 후기</span>
        <FontAwesomeIcon icon={faArrowRight} className="arrow_right"/>
        
        <p className='on_sale'>{userModel.name}님의 판매 중인 상품 10개</p>
        <div className='scrolled_div'>
            <UserProducts />
            <UserProducts />
            <UserProducts />
            <UserProducts />
            <UserProducts />
            <UserProducts />
            <UserProducts />
            <UserProducts />
            <UserProducts />
            <UserProducts />
        </div>
    </SellerInfoWrapper>
  )
}
