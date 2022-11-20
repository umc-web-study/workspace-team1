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
    const [number, setNumber] = useState(1);
    const [bannerImage, setImageNumber] = useState(1);

    const onIncreaseImage = () => {
        setImageNumber(number + 1)

        if (setImageNumber === 0)
            bannerImage = "https://img2.joongna.com/media/original/2022/10/31/1667200204429.png"
        else if (setImageNumber === 1)
            bannerImage = `<img src="https://img2.joongna.com/media/original/2022/11/01/1667268265697.png" alt="banner"/>`
        else if (setImageNumber === 2)
            bannerImage = `<img src="https://img2.joongna.com/media/original/2022/11/01/1667268265697.png" alt="banner"/>`
        else if (setImageNumber === 3)
            bannerImage = `<img src="https://img2.joongna.com/media/original/2022/11/01/1667268265697.png" alt="banner"/>`
        else if (setImageNumber === 4)
            bannerImage = `<img src="https://img2.joongna.com/media/original/2022/11/01/1667268265697.png" alt="banner"/>`
        else if (setImageNumber === 5)
            bannerImage = `<img src="https://img2.joongna.com/media/original/2022/11/01/1667268265697.png" alt="banner"/>`
        else if (setImageNumber === 6)
            bannerImage = `<img src="https://img2.joongna.com/media/original/2022/11/01/1667268265697.png" alt="banner"/>`
    }

    const onIncrease = () => {
        if (number === 7)
            setNumber(1)
        else setNumber(number + 1);
    }

    const onDecrease = () => {
        if (number === 1)
            setNumber(7)
        else setNumber(number - 1);
    }

    return (
        <BannerWrapper>
            <LeftArrow>
                {/* <img src="../images/left_arrow.png" alt="LeftArrow" /> */}
            </LeftArrow>
            <BannerImg/>
            {/* <img src={bannerImage} alt="BannerImage" /> */}
            {/* {bannerImage} */}
            <RightArrow />
        </BannerWrapper>
    );
}