import React from "react";
import styled from "styled-components";

const BannerImgWrapper = styled.div `
    height: 30em;
    width: 80%;
    float: left;
    text-align: center;
`

const BannerContent = styled.div `
    text-align: center;
    margin-right: 20%;
    margin-left: 30%;
    margin-top: 3em;
    background-color: black;
`

const BannerContentTitle = styled.p `
    font-weight: bold;
    color: white;
    font-size: 3em;
    text-align: left;
    background-color: pink;
`

const BannerContentText = styled.p `
    color: white;
    font-size: 1.3em;
    text-align: left;
    background-color: purple;
`

export default function BannerImg(props) {
    return (
        <BannerImgWrapper>
            <img src={props.img} alt="bannerImg" />
        </BannerImgWrapper>
    )
}