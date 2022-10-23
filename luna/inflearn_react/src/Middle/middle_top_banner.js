import React from "react";
import "../App.css"

function MiddleTopBanner() {
    return (
        <>
        <div className="top_banner">
            <div className="top_banner_left" style={{}}>
                <br/>
                <p className="top_banner_tag">추천 학습 로드맵</p>
                <p className="top_banner_title">왕초보를 위한</p>
                <p className="top_banner_title">Lv. 1 인프런 로드맵 📖</p>
                <p className="top_banner_content">인프런이 처음이라면, 길라잡이가 되어드릴게요.</p>
                <br/><br/><br/>
            </div>
            <div style={{float: "right"}}>
                <img alt="middle_banner_gif" className="top_banner_image" src="https://cdn.inflearn.com/public/main_sliders/5207c5ee-e72f-4fc1-aad0-6122d2a55956/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%E1%84%86%E1%85%A2%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB_main_521.gif" />
            </div>
        </div>
        {/* <div class="banner_title_category">
            <div class="banner_move_button">
                <span class="banner_move_number">5/7</span>
                <img class="banner_move_arrow_button" src="image/arrow_left.png">
                <img class="banner_move_arrow_button" src="image/play.png">
                <img class="banner_move_arrow_button" src="image/arrow_right.png">
            </div>
            <div style="margin-right: 15px; width: 2px; height: 35px; font-size: 30px; border-left: solid 1px rgb(227, 227, 227); font-weight:lighter;">
                <span style="width: 1px; color: white">|</span>
            </div>
            <div class="banner_category">
                <span class="banner_category_span">입문 로드맵</span>
                <span class="banner_category_span">신규 강의</span>
                <span class="banner_category_span">왕초보 모여라</span>
                <span class="banner_category_span">지식공유신청</span>
                <span class="banner_category_span">Top 50</span>
                <span class="banner_category_span">인프런 동료찾기</span>
                <span class="banner_category_span">인프런은</span>
            </div>
            <div class="banner_category_down">
                <span class="banner_category_span_arrow"><img width=15px; height=15px; src="image/arrow_bottom.png"></span>
            </div>
        </div>
        <hr style="margin-top: 13px; border: 0px; height: 1px; background-color: rgb(227, 227, 227);">
        <div class="main_center_search">
            <p style="font-size: 23px;">인프런에서 성장을 도와드려요</p>
            <input class="main_center_search_search" type="text" id="main_search_keyword" name="main_search_keyword" palceholder="test">
        </div> */}
        </>
    )
}

export default MiddleTopBanner;