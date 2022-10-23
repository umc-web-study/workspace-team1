import React from 'react';

export default function Lecture(props) {
    const lec_list = props.lecture_list;

    return (
        <div className={"lecture_lists"}>
            <h1>
                <a href="#">{props.head_title}</a>
            </h1>
            <h3>{props.sub_title}</h3>
            {/*<div className={"lecture_list"}>*/}
            {/*    {*/}
            {/*        lec_list.map((item) => {*/}
            {/*            return (*/}
            {/*                <div className={"lecture"}>*/}
            {/*                    <div className={"lecture_img"}>*/}
            {/*                        <img*/}
            {/*                            loading="lazy"*/}
            {/*                            src="https://cdn.inflearn.com/public/courses/324145/course_cover/f4b28e4f-6635-4e57-95be-5f4ac7b1ea49/I_O_python_1.png"*/}
            {/*                            data-src="https://cdn.inflearn.com/public/courses/324145/course_cover/f4b28e4f-6635-4e57-95be-5f4ac7b1ea49/I_O_python_1.png"*/}
            {/*                            alt="I_O_python_1.png"*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className={"lecture_title"}>*/}
            {/*                        <span>{item.lectureTitle}</span>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    );
}