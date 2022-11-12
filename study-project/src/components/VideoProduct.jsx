import React from "react";
import styled from "styled-components";

const VideoProductWrapper = styled.div `
    display: inline-block;
    width: 18.8%;
    height: 340px;
    border-radius: 5px;
`

const Play = styled.span `
    font-size: 0.8rem;
    background-color: #ff6900;
    padding: 2px 5px;
    color: white;
    border-radius: 5px;
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

export default function VideoProduct(props) {
    return (
        <VideoProductWrapper style={{background: 'url(../images/test_img_01.jpg)'}}>
            <br />
            <Play>Play</Play>
            <Price>{props.price}원</Price>
            <Name>{props.name}</Name>
            <Time>{props.time}</Time>
        </VideoProductWrapper>
    );
}