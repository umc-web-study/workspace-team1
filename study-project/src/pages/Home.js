import React from "react";
import styled from "styled-components";
import ViewMoreButton from "../components/ViewMoreButton";
import Banner from "./Banner";
import New from "./New";
import Video from "./Video";
import Recommand from "./Recommand";

const HomeWrapper = styled.section`
    // background-color: yellowgreen;
`;

const ContentWrapper = styled.section`
    margin-left: 10%;
    margin-right: 10%;
`;

export default function Home() {
    return (
        <HomeWrapper>
            <Banner />
            <ContentWrapper>
                <br /><br />
                <New />
                <br /><br /><br /><br />
                <ViewMoreButton />
                <br /><br />
                <Video />
                <br /><br /><br /><br />
                <ViewMoreButton />
                <br /><br />
                <Recommand />
            </ContentWrapper>
            <br /><br /><br /><br />
            <br /><br /><br /><br />
        </HomeWrapper>
    );
}