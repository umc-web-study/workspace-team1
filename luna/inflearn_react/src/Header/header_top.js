import React from "react";
import "../App.css"

export default function HeaderTop() {
    return (
        <>
        <div className="header_top side_space">
            <div className="header_top_left">
                <div className="header_top_left_button">
                    <img alt="inflearn_logo" src="image/inflearn_logo.png" style={{marginRight: "7px", marginTop: "14px"}} width="14" height="14"/>
                    <p className="header_top_text">교육</p>
                </div>
                <div className="header_top_left_button">
                    <p className="header_top_text" style={{marginRight: "7px", marginTop: "14px"}} >|</p>
                </div>
                <div className="header_top_left_button">
                    <img alt="inflearn_logo" src="image/employment.png" style={{marginRight: "7px", marginTop: "14px"}} width="14" height="14"/>
                    <p className="header_top_text">채용</p>
                </div>
            </div>
            <div className="header_top_right">
                <p className="header_top_text" style={{fontSize: "14px"}}>지식공유 참여</p>
            </div>
        </div>
        <div style={{ borderBottom: "1px solid rgb(235, 235, 235)", marginTop: "20px", textAlign: "center"  }} />
        </>
    )
}