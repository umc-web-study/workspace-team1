import React from "react";
import Lecture from "./lecture";
import '../App.css'

export default function LectureList(props) {
    return (
        <>
        <div className="lecture_list side_space">
            <div className="lecture_list_title">
                <p className="lecture_list_title_text">{props.title}</p>
                <img src="image/arrow_right_black_white.png" width="30px" height="30px" alt="arrow_right_black_white" />
            </div>
            <p className="lecture_list_summary">무료 강의부터 가볍게 시작해 보세요.</p>
            <Lecture title="인프콘 2022 다시보기" lecturer="인프런 01" star="10" price="무료" people="12800" update="업데이트"/>
            <Lecture title="인프콘 2022 다시보기" lecturer="인프런 02" star="5" price="무료" people="1200" update="업데이트"/>
            <Lecture title="인프콘 2022 다시보기" lecturer="인프런 03" star="7" price="무료" people="1800" update="업데이트"/>
            <Lecture title="인프콘 다시보기" lecturer="인프런 04" star="8" price="무료" people="2800" update="업데이트"/>
            <Lecture title="인프콘 2022" lecturer="인프런 05" star="6" price="무료" people="100" update="업데이트"/>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}