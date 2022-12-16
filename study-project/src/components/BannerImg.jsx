import React from "react";
import styled from "styled-components";

const BannerImgWrapper = styled.div `
    height: 27em;
    width: 84%;
    float: left;
    text-align: center;
`

export default function BannerImg(props) {
    return (
        <BannerImgWrapper>
            <img src={props.img} alt="bannerImg" />
        </BannerImgWrapper>
    )
}