import React from "react";
import { BsChevronRight } from "react-icons/bs";

function CourseListIntro(props) {
    return (
        <div className="course_list_intro">
            <span>{props.title}</span>
            <BsChevronRight />
            <p>{props.extraText}</p>
        </div>
    )
}

export default CourseListIntro