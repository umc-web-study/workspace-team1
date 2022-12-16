import React from "react";
import styled from "styled-components";

const ViewMoreWrapper = styled.div `
    text-align: center;
    cursor: pointer;
`

const ViewMore = styled.button `
    display: inline-block;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    padding: 10px 40px;
    background-color: white;
    color: gray;
`

export default function ViewMoreButton() {
    return (
        <ViewMoreWrapper>
            <ViewMore>더 보기</ViewMore>
        </ViewMoreWrapper>
    )
}