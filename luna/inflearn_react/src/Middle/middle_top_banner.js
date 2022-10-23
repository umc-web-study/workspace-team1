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
        </>
    )
}

export default MiddleTopBanner;