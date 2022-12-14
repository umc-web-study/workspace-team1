import React from "react";
import NavItems from "./NavItems";
import Banner from "./Banner";
import BannerImage from "./BannerImage";
import BannerCategory from "./BannerCategory";
import BannerPlayer from "./BannerPlayer";
import { BsChevronDown } from "react-icons/bs";
import MainSearch from "./MainSearch";
import styled from "styled-components";
import CourseListIntro from "./CourseListIntro";
import Course from "./Course";
import "./Main.css"

const FlexedDiv = styled.div `
    display: flex;
`

function Main() {
    return (
        <main>
            <nav>
                <NavItems></NavItems>
            </nav>
            <FlexedDiv>
                <Banner></Banner>
                <BannerImage></BannerImage>
            </FlexedDiv>
            <div className="banner_pagination">
                <BannerPlayer />
                <div className="banner_vertical_line"></div>
                <BannerCategory name="์ ๊ท ๊ฐ์ ๐" />
                <BannerCategory name="์์ด๋ณด ๋ชจ์ฌ๋ผ ๐" />
                <BannerCategory name="์ง์๊ณต์ ์ ์ฒญ" />
                <BannerCategory name="Top 50 ๐" />
                <BannerCategory name="์๋ฌธ ๋ก๋๋งต" />
                <BannerCategory name="์ธํ๋ฐ์ ๐ฑ" />
                <BannerCategory name="์ธํ๋ฐ ๋๋ฃ์ฐพ๊ธฐ" />
                <div className="dropdown">
                    <BsChevronDown />
                </div>
            </div>
            <div className="banner_horizontal_line"></div>
            <MainSearch name="์ธํ๋ฐ์์ ๊ฐ์น๋ฅผ ๋์ด์ธ์" placeholder="๋ฐฐ์ฐ๊ณ  ์ถ์ ์ง์์ ์๋ ฅํด๋ณด์ธ์." />
            <div className="side_margin_container">
                <CourseListIntro title="๋ฌด๋ฃ๊ฐ์? ์คํ๋ ค ์ข์ โจ" extraText="๋ฌด๋ฃ๊ฐ์๋ถํฐ ๊ฐ๋ณ๊ฒ ์์ํด ๋ณด์ธ์." />
                <div className="course_list">
                    <Course title="์ธํ์ฝ 2022 ๋ค์๋ณด๊ธฐ" />
                    <Course title="์ธํ์ฝ 2022 ๋ค์๋ณด๊ธฐ" />
                    <Course title="์ธํ์ฝ 2022 ๋ค์๋ณด๊ธฐ" />
                    <Course title="์ธํ์ฝ 2022 ๋ค์๋ณด๊ธฐ" />
                    <Course title="์ธํ์ฝ 2022 ๋ค์๋ณด๊ธฐ" />
                </div>
            </div>
        </main>
    )
}

export default Main