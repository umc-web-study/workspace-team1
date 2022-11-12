import React from "react";
import styled from "styled-components";

const RecommandProductWrapper = styled.div `
    display: inline-block;
    width: 18.8%;
    cursor: pointer;
`

const Price = styled.p `
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 0.3rem;
`

const Name = styled.p `
    font-size: 1rem;
    margin-top: 0.2rem;
`

const Time = styled.p `
    font-size: 0.9rem;
    color: gray;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
`

const Pay = styled.span `
    font-size: 0.8rem;
    background-color: #ff6900;
    padding: 2px 5px;
    color: white;
    border-radius: 5px;
`

export default function RecommandProduct(props) {
    return (
        <RecommandProductWrapper>
            <img src="../images/test_img_01.jpg" alt="이미지 01" width={"100%"} style={{borderRadius: "5px"}} />
            <br />
            <Price>{props.price}원</Price>
            <Name>{props.name}</Name>
            <Time>{props.time}</Time>
            <Pay>{props.pay}</Pay>
        </RecommandProductWrapper>
    );
}