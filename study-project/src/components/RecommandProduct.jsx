import React from "react";
import styled from "styled-components";

const RecommandProductWrapper = styled.div `
    display: inline-block;
    cursor: pointer;
    width: 32%;
`

const ProductInfoWrapper = styled.div `
    display: inline-block;
    margin-top: 0px;
    width: 50%;
    vertical-align: top;
    padding: 0px;
`

const Price = styled.div `
    display: block;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 0.3rem;
`

const Name = styled.div `
    display: block;
    font-size: 0.9rem;
    margin-top: 0.2rem;
`

const Location = styled.span `
    display: inline;
    font-size: 0.7rem;
    color: gray;
`

const Time = styled.span `
    display: inline-block;
    font-size: 0.7rem;
    color: gray;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
`

const Pay = styled.span `
    display: inline-block;
    font-size: 0.8rem;
    background-color: #ff6900;
    padding: 2px 7px;
    color: white;
    border-radius: 5px;
`

export default function RecommandProduct(props) {
    return (
        <RecommandProductWrapper>
            <img src="../images/test_img_03.jpg" alt="이미지 01" width={"35%"} style={{borderRadius: "5px", marginRight: "20px"}} />
            <ProductInfoWrapper>
                <Price>{props.price}원</Price>
                <Name>{props.name}</Name>
                <Location>{props.location}</Location>
                <span style={{fontSize: "0.7rem", marginRight: "5px", marginLeft: "5px"}}>|</span>
                <Time>{props.time}</Time>
                <br />
                <Pay>{props.pay}</Pay>
            </ProductInfoWrapper>
        </RecommandProductWrapper>
    );
}