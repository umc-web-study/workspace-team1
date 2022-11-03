import React from "react";
import "../App.css"

export default function MiddleTopBanner(props) {
    return (
        <>
        <div className="top_banner">
            <div className="top_banner_left" style={{}}>
                <br/>
                <p className="top_banner_tag">{props.tag}</p>
                <p className="top_banner_title">{props.title1}</p>
                <p className="top_banner_title">{props.title2}</p>
                <p className="top_banner_content">{props.content}</p>
                <br/><br/><br/>
            </div>
            <div style={{float: "right"}}>
                <img alt="middle_banner_gif" className="top_banner_image" src="https://cdn.inflearn.com/public/main_sliders/5207c5ee-e72f-4fc1-aad0-6122d2a55956/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%E1%84%86%E1%85%A2%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB_main_521.gif" />
            </div>
        </div>
        </>
    )
}