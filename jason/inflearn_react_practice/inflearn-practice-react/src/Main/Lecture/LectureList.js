import React from 'react';
import Lecture from "./Lecture";
import { lecture_sample } from "../lecture_sample";

export default function LectureList() {
    const lecture_samples = lecture_sample;

    return (
        <div className={"main_lectures"}>
            <div className={"container main_lectures-container"}>
                 <Lecture
                     head_title={"무료강의? 오히려 좋아 ✨"}
                     sub_title={"무료 강의부터 가볍게 시작해보세요."}
                     lecture_list={lecture_samples}
                 />
                <Lecture
                    head_title={"왕초보도 할 수 있어요 💪"}
                    sub_title={"이미 검증된 쉽고 친절한 입문 강의!!"}
                    lecture_list={lecture_samples}
                />
            </div>
        </div>
    )
}