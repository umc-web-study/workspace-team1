import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import BannerImg from "../components/BannerImg";
import BannerIndicator from '../components/BannerIndicator';

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

//사용자 정의 Hook
const useCounter = (initialValue, ms) => {
    const [count, setCount] = useState(initialValue);
    const intervalRef = useRef(null);
    const start = useCallback(() => {
        if (intervalRef.current !== null) {
            return;
        }
        intervalRef.current = setInterval(() => {
            setCount(c => c + 1);
        }, ms);
    }, []);
    const stop = useCallback(() => {
        if (intervalRef.current === null) {
            return;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);
    const reset = useCallback(() => {
        setCount(0);
        stop()
    }, []);
    return { count, start, stop, reset };
}

export default function Banner() {
    // Timer 관련    
	//시, 분, 초를 state로 저장
    const [currentSeconds, setCurrentSeconds] = useState(0);
    const { count, start, reset } = useCounter(0, 1000);

	// 타이머 기능
    const timer = () => {
        setCurrentSeconds(currentSeconds)

        if (currentSeconds === 2) {
            reset()
            onIncreaseImage()
        }
    }
    
    // count의 변화에 따라 timer 함수 랜더링
    useEffect(timer, [count]);

    // Banner Image 관련
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

        reset()
        start()
    }

    const onDecreaseImage = () => {
        if (bannerImageIdx > 1)
            setImageNumber(bannerImageIdx - 1)
        else setImageNumber(9);

        reset()
        start()
    }

    return (
        <BannerWrapper style={{backgroundColor: bannerBackgroundColor[bannerImageIdx]}}>
            <LeftArrow onClick={onDecreaseImage} style={{alignItems: "center"}}>
                <img src="../images/left_arrow.png" width={"45%"} alt="leftArrow"/>
            </LeftArrow>
            <BannerImg img = {bannerImage[bannerImageIdx]} />
            <BannerIndicator number = {bannerImageIdx} style={{float: "left"}} />
            <RightArrow onClick={onIncreaseImage}>
                <img src="../images/right_arrow.png" width={"45%"} alt="rightArrow" />
            </RightArrow>
        </BannerWrapper>
    );
}