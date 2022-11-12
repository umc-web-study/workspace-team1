import React from "react";
import VideoProduct from "../components/VideoProduct";
import Space from "../components/Space";

export default function Video() {
    return (
        <>
            <p style={{fontSize: "1.2em"}}>중고나라 ON<br/>영상으로 더 생생하게 🎬</p>
            <br />
            <VideoProduct price="30,000" name="LG 노트북" time="6시간 전" />
            <Space />
            <VideoProduct price="100,000" name="LG 노트북" time="12시간 전" />
            <Space />
            <VideoProduct price="36,000" name="LG 노트북" time="8시간 전" />
            <Space />
            <VideoProduct price="60,000" name="LG 노트북" time="7시간 전" />
            <Space />
            <VideoProduct price="80,000" name="LG 노트북" time="6시간 전" />
        </>
    );
}