import React from "react";
import NewProduct from "../components/NewProduct";
import Space from "../components/Space";

export default function New() {
    return (
        <>
            <p style={{fontSize: "1.2em"}}>중고나라 쿨매존<br/>인기가게들의 최신상품</p>
            <br />
            <NewProduct price="30,000" name="LG 노트북" time="6시간 전" pay="Pay" />
            <Space />
            <NewProduct price="100,000" name="LG 노트북" time="12시간 전" pay="Pay" />
            <Space />
            <NewProduct price="36,000" name="LG 노트북" time="8시간 전" pay="Pay" />
            <Space />
            <NewProduct price="60,000" name="LG 노트북" time="7시간 전" pay="Pay" />
            <Space />
            <NewProduct price="80,000" name="LG 노트북" time="6시간 전" pay="Pay" />
        </>
    );
}