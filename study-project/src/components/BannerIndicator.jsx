import React from "react";
import styled from "styled-components";

const BannerIndicatorWrappter = styled.div `
    display: flex;
    align-items: center;
`

const Select = styled.div `
    background-color: #ff6900;
    width: 13px;
    height: 13px;
    border-radius: 13px;
    float: left;
    margin-right: 2.5px;
    margin-left: 2.5px;
`

const Unselect = styled.div `
    background-color: #ff6900;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    float: left;
    margin-right: 2.5px;
    margin-left: 2.5px;
`

export default function BannerIndicator(props) {
    return (
        <BannerIndicatorWrappter>
            <Select/>
            <Unselect/>
            <Unselect/>
            <Unselect/>
            <Unselect/>
            <Unselect/>
            <Unselect/>
            <Unselect/>
        </BannerIndicatorWrappter>
    )
}