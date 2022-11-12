import React from "react";
import styled from "styled-components";

const BannerImg = styled.section `
    background-color: gray;
    height: 30em;
`

export default function Banner() {
    return (
        <>
            <BannerImg>Banner</BannerImg>
        </>
    );
}