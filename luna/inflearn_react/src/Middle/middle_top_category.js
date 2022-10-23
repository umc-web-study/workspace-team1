import React from "react";
import "../App.css"

function MiddleTopCategory() {
    return (
        <>
        <div className="banner_title_category">
            <div className="banner_move_button">
                <span className="banner_move_number">5/7</span>
                <img alt="arrow_leftt" className="banner_move_arrow_button" src="image/arrow_left.png" />
                <img alt="play" className="banner_move_arrow_button" src="image/play.png" />
                <img alt="arrow_right" className="banner_move_arrow_button" src="image/arrow_right.png" />
            </div>
            <div style={{marginRight: "15px", width: "2px", height: "35px", fontSize: "30px", borderLeft: "solid 1px rgb(227, 227, 227)", fontWeight: "lighter"}}>
                <p style={{width: "1px", color: "white"}}>|</p>
            </div>
            <div className="banner_category">
                <p className="banner_category_span">입문 로드맵</p>
                <p className="banner_category_span">신규 강의</p>
                <p className="banner_category_span">왕초보 모여라</p>
                <p className="banner_category_span">지식공유신청</p>
                <p className="banner_category_span">Top 50</p>
                <p className="banner_category_span">인프런 동료찾기</p>
                <p className="banner_category_span">인프런은</p>
            </div>
            <div className="banner_category_down">
                <p className="banner_category_span_arrow"><img alt="arrow_bottom" width="15px" height="15px" src="image/arrow_bottom.png"/></p>
            </div>
        </div>
        <div className="side_space" style={{ width: "76%", borderBottom: "1px solid rgb(227, 227, 227)", marginTop: "13px", textAlign: "center"  }} />
        <div className="main_center_search">
            <p style={{fontSize: "23px"}}>인프런에서 성장을 도와드려요</p>
            <input className="main_center_search_search" type="text" id="main_search_keyword" name="main_search_keyword"/>
        </div>
        </>
    )
}

export default MiddleTopCategory;