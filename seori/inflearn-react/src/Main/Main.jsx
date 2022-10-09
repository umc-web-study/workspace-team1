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
                <BannerPlayer name="5/7" />
                <div className="banner_vertical_line"></div>
                <BannerCategory name="신규 강의 🎁" />
                <BannerCategory name="왕초보 모여라 😎" />
                <BannerCategory name="지식공유신청" />
                <BannerCategory name="Top 50 👑" />
                <BannerCategory name="입문 로드맵" />
                <BannerCategory name="인프런은 🌱" />
                <BannerCategory name="인프런 동료찾기" />
                <div className="dropdown">
                    <BsChevronDown />
                </div>
            </div>
            <div class="banner_horizontal_line"></div>
            <MainSearch name="인프런에서 가치를 높이세요" placeholder="배우고 싶은 지식을 입력해보세요." />
            <div className="side_margin_container">
                <CourseListIntro title="무료강의? 오히려 좋아 ✨" extraText="무료강의부터 가볍게 시작해 보세요." />
                <div class="course_list">
                    <Course title="인프콘 2022 다시보기" />
                    <Course title="인프콘 2022 다시보기" />
                    <Course title="인프콘 2022 다시보기" />
                    <Course title="인프콘 2022 다시보기" />
                    <Course title="인프콘 2022 다시보기" />
                </div>
            </div>
        </main>
    )
}

export default Main