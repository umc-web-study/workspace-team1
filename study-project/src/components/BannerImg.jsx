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
            {/* <BannerContent> */}
                {/* <BannerContentTitle>{props.title}</BannerContentTitle> */}
                {/* <BannerContentText>{props.content}</BannerContentText> */}
            {/* </BannerContent> */}
            <img src="https://img2.joongna.com/media/original/2022/10/31/1667200204429.png" alt="bannerImg01" />
            {/* <img src="https://img2.joongna.com/media/original/2022/11/01/1667268265697.png" alt="bannerImg02" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/11/18/1668741211087.png" alt="bannerImg03" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/10/17/1665967916895.png" alt="bannerImg04" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/11/07/1667777988290.png" alt="bannerImg05" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/10/31/1667208266409.png" alt="bannerImg06" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/10/31/1667207459320.png" alt="bannerImg07" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/10/12/1665557839538.png" alt="bannerImg08" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/10/31/1667208784699.png" alt="bannerImg09" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/11/11/1668145504958.png" alt="bannerImg10" /> */}
            {/* <img src="https://img2.joongna.com/media/original/2022/10/31/1667210920864.png" alt="bannerImg11" /> */}
        </BannerImgWrapper>
    )
}