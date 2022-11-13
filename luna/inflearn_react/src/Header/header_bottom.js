import React from "react";
import "../App.css"

export default function HeaderBottom() {
    return (
        <>
        <div className="header_bottom side_space">
            <img style={{float: "left", marginRight: "30px", marginTop: "15px"}} alt="inflearn_text_logo" height="25px" src="image/inflearn_text_logo.png"/>
            <div class="header_bottom_category">
                <p className="header_bottom_category_text">강의</p>
                <p className="header_bottom_category_text">로드맵</p>
                <p className="header_bottom_category_text">멘토링</p>
                <p className="header_bottom_category_text">커뮤니티</p>
                <p className="header_bottom_category_text">인프런</p>
            </div>
            <div class="header_bottom_right">
                <p style={{marginTop: "10px", backgroundColor: "#ff7867", color: "white"}} className="header_bottom_login_signup">회원가입</p>
                <p style={{marginTop: "10px", backgroundColor: "white"}} className="header_bottom_login_signup">로그인</p>
            </div>
            <div>
                <input class="header_bottom_search" type="text" id="search_keyword" name="search_keyword" />
            </div>
        </div>
        </>
    )
}