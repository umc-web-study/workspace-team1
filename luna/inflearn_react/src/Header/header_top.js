import React from "react";
import "../App.css"

function HeaderTop() {
    return (
        <>
        <div className="header_top side_space">
            <div className="header_top_left">
                <div className="header_top_left_button">
                    <img alt="inflearn_logo" src="image/inflearn_logo.png" width="14" height="14"/>
                    <p className="header_top_left_text">교육</p>
                </div>
                <p className="header_top_left_text" style={{marginTop: "10px"}}>|</p>
                <div className="header_top_left_button">
                    <img alt="inflearn_logo" src="image/employment.png" width="14" height="14"/>
                    <p className="header_top_left_text">채용</p>
                </div>
            </div>
            <div className="header_top_right">
                <p className="header_top_left_text" style={{fontSize: "14px"}}>지식공유 참여</p>
            </div>
        </div>
        <div className="side_space" style={{ width: "76%", borderBottom: "1px solid rgb(227, 227, 227)", marginTop: "13px", textAlign: "center"  }} />
        </>
    )
}

export default HeaderTop;