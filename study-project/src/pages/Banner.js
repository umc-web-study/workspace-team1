import React from "react";
import styled from "styled-components";
import BannerImg from "../components/BannerImg";
import { useState } from "react";

const BannerWrapper = styled.div `
    height: 27em;
`

const LeftArrow = styled.div `
    display: inline-block;
    float: left;
    height: 27em;
    width: 8%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 7px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

const RightArrow = styled.div `
    display: inline-block;
    height: 27em;
    width: 8%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 7px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
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

    const bannerBackgroundColor = [
        "#f05d7a", "#f05d7a", "#1b83e1",
        "#cf6118", "#646464", "#02b26c",
        "#101010", "#d93d35", "#16b0e3",
        "#475c66"
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
        <BannerWrapper style={{backgroundColor: bannerBackgroundColor[bannerImageIdx]}}>
            <LeftArrow onClick={onDecreaseImage} style={{alignItems: "center"}}>
                <img src="../images/left_arrow.png" width={"45%"} />
            </LeftArrow>
            <BannerImg img = {bannerImage[bannerImageIdx]} />
            <RightArrow onClick={onIncreaseImage}>
                <img src="../images/right_arrow.png" width={"45%"} />
            </RightArrow>
        </BannerWrapper>
    );
}