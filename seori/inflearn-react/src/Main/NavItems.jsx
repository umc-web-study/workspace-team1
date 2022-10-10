import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const FlexedDiv = styled.div`
    display: flex;
`

function NavItems() {
    return (
        <div className="nav_items">
            <ul>
                <li><img src="/resources/inflearn.png" alt="nav-inflearn.png" width="110" height="20"/></li>
                <li><a href="/">강의</a></li>
                <li><a href="/">로드맵</a></li>
                <li><a href="/">멘토링</a></li>
                <li><a href="/">커뮤니티</a></li>
                <li><a href="/">인프런</a></li>
            </ul>
            <FlexedDiv>
                <div className="search">
                    <input/>
                    <FiSearch className="searchIcon" />
                </div>
                <button className="login" type="button">
                    로그인
                </button>
                <button className="signup" type="button">
                    회원가입
                </button>
            </FlexedDiv>
        </div>
    )
}

export default NavItems