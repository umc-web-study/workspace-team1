import React from "react";
import styled from "styled-components";
import BannerImg from "../components/BannerImg";
import { useState } from "react";

const BannerWrapper = styled.div `
    background-color: gray;
    height: 30em;
`

const LeftArrow = styled.div `
    display: inline-block;
    float: left;
    height: 30em;
    width: 10%;
    background-color: yellowgreen;
    cursor: pointer;
`

const RightArrow = styled.div `
    display: inline-block;
    height: 30em;
    width: 10%;
    background-color: yellow;
    cursor: pointer;
`

export default function Banner() {
    const [bannerImageIdx, setImageNumber] = useState(1);

    const bannerImage = [
        "https://img2.joongna.com/media/original/2022/11/01/1667268265697.png",
        "https://img2.joongna.com/media/original/2022/11/18/1668741211087.png",
        "https://img2.joongna.com/media/original/2022/10/17/1665967916895.png",
        "https://img2.joongna.com/media/original/2022/11/07/1667777988290.png",
        "https://img2.joongna.com/media/original/2022/10/31/1667208266409.png",
        "https://img2.joongna.com/media/original/2022/10/31/1667207459320.png",
        "https://img2.joongna.com/media/original/2022/10/12/1665557839538.png",
        "https://img2.joongna.com/media/original/2022/10/31/1667208784699.png",
        "https://img2.joongna.com/media/original/2022/11/11/1668145504958.png",
        "https://img2.joongna.com/media/original/2022/10/31/1667210920864.png"
    ]

    const onIncreaseImage = () => {
        if (bannerImageIdx < 9)
            setImageNumber(bannerImageIdx + 1)
        else setImageNumber(1);
    }

    const onDecreaseImage = () => {
        if (bannerImageIdx > 1)
            setImageNumber(bannerImageIdx - 1)
        else setImageNumber(9);
    }

    return (
        <BannerWrapper>
            <LeftArrow onClick={onDecreaseImage}>
                {/* <img src="../images/left_arrow.png" alt="LeftArrow" /> */}
            </LeftArrow>
            <BannerImg img = {bannerImage[bannerImageIdx]} />
            <RightArrow onClick={onIncreaseImage}/>
        </BannerWrapper>
    );
}