import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faPause } from "@fortawesome/free-solid-svg-icons/faPause";
// import { event_sample } from "./event_sample";

export default function Event() {
    // const [ counter, setCounter ] = React.useState(1);
    //
    // const leftButtonOnClick = () => {
    //     setCounter(counter - 1);
    // };
    // // const pauseButtonClick = () => {
    // //
    // // };
    // const rightButtonOnClick = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <div className={"main_event"}>
            <div className={"main_event-logo"}>
                <img src={"img/main_image.png"} alt="메인 페이지 이벤트 이미지"/>
            </div>
            <div className={"main_event-item"}>
                <div className={"container"}>
                    <div className={"main_event-item-container"}>
                        <div className={"main_event-item-slidebtn"}>
                            <div className={"slidebtn_pagenum"}>
                                <span>{ counter }</span>
                                <span>/</span>
                                <span>8</span>
                            </div>
                            <div className={"slidebtn_movebtn"}>
                                <button className={"slidebtn_movebtn-left"}><FontAwesomeIcon icon={ faChevronLeft } /></button>
                                <button className={"slidebtn_movebtn-pause"}><FontAwesomeIcon icon={ faPause } /></button>
                                <button className={"slidebtn_movebtn-right"}><FontAwesomeIcon icon={ faChevronRight } /></button>
                            </div>
                        </div>
                        <div className={"main_event-item-divider"}></div>
                        <div className={"main_event-item-list"}>
                            <span>입문 로드맵</span>
                            <span>Top 50 👑</span>
                            <span>신규 강의 🎁</span>
                            <span>왕초보 모여라 😎</span>
                            <span>지식공유신청</span>
                            <span>인프런 동료찾기</span>
                            <span>제이슨 테스트</span>
                            <span>인프런은 🌱</span>
                        </div>
                        <div className={"main_event-item-viewbtn"}>
                            <button>
                                <FontAwesomeIcon icon={ faChevronDown } />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}