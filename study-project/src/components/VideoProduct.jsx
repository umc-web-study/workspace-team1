import React from "react";
import styled from "styled-components";

const VideoProductWrapper = styled.div `
    background: url(../images/test_img_02.jpg);
    display: inline-block;
    width: 18.8%;
    height: 10%;
    border-radius: 5px;
    cursor: pointer;
`

const ImageWrapper = styled.div `
    background-color: rgba( 255, 255, 255, 0.5 );
    background: linear-gradient(to top, rgba( 30, 30, 30, 1 ) 1%, rgba( 255, 255, 255, 0 ) 40%);
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding-top: 18px;
    padding-left: 15px;
`

const Play = styled.span `
    font-size: 0.9rem;
    background: linear-gradient(to right, #FF6900, #FFA600);
    padding: 4px 12px;
    font-weight: bold;
    color: white;
    border-radius: 15px;
`

const Price = styled.p `
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 0.3rem;
    color: white;
    margin-top: 200px;
`

const Name = styled.p `
    font-size: 1rem;
    margin-top: 0.2rem;
    color: white;
`

const Time = styled.p `
    font-size: 0.9rem;
    color: gray;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
`

export default function VideoProduct(props) {
    return (
        <VideoProductWrapper>
            <ImageWrapper>
                <Play>PLAY</Play>
                <Price>{props.price}원</Price>
                <Name>{props.name}</Name>
                <Time>{props.time}</Time>
            </ImageWrapper>
        </VideoProductWrapper>
    );
}