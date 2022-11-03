import React from "react";

export default function Lecture(props) {
    return (
        <>
        <div className="lecture_content">
            <img alt="lecture1" className="lecture_list_image" src="https://cdn.inflearn.com/public/courses/329211/cover/ea485515-6665-4e5c-acd7-157c2b8b08f3/infcon-apply-main.png" />
            <br/><br/>
            <p className="lecture_title">{props.title}</p>
            <p className="lecture_lecturer">{props.lecture}</p>
            <div className="lecture_star">
                <img alt="star_filled1" className="lecture_star_img" src="image/star_filled.png"/>
                <img alt="star_filled2" className="lecture_star_img" src="image/star_filled.png"/>
                <img alt="star_filled3" className="lecture_star_img" src="image/star_filled.png"/>
                <img alt="star_filled4" className="lecture_star_img" src="image/star_filled.png"/>
                <img alt="star_filled5" className="lecture_star_img" src="image/star_filled.png"/>
                <span className="lecture_star_number">({props.star})</span>
            </div><br/>
            <p className="lecture_price">{props.price}</p>
            <div className="lecture_info">
                <p className="lecture_people">+{props.people}명</p>
                <p className="lecture_update">{props.update}</p>
            </div>
        </div>
        </>
    )
}