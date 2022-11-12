import React from "react";
import styled from "styled-components";
import ViewMoreButton from "../components/ViewMoreButton";
import Banner from "./Banner";
import Recommand from "./Recommand";
import Video from "./Video";

const HomeWrapper = styled.section`
    background-color: yellowgreen;
`;

const ContentWrapper = styled.section`
    margin-left: 10%;
    margin-right: 10%;
    // display: flex;
    // align-items: center;
`;

export default function Home() {
    return (
        <HomeWrapper>
            <Banner />
            <ContentWrapper>
                <br /><br />
                <Recommand />
                <br /><br /><br /><br />
                <ViewMoreButton />
                {/* <Video /> */}
            </ContentWrapper>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
        </HomeWrapper>
    );
}