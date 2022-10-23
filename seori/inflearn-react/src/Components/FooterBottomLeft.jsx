import React from "react";
import "./FooterBottomLeft.css"
import inflearn from "../assets/inflearn.png"

function FooterBottomLeft() {
    return (
        <div className="footer_bottom_left">
            <img src={inflearn} alt="footer-inflearn.png" />
            <span>|</span>
            <span>개인정보취급방침</span>
            <span>|</span>
            <span>이용약관</span>
            <p>(주)인프랩 | 대표자: 이형주 | 사업자번호: 499-81-00612 사업자 정보 확인<br />
                통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 | 이메일: info@inflearn.com<br />
                주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호
            </p>
            <p>ⒸINFLAB. ALL RIGHTS RESERVED</p>
        </div>
    )
}

export default FooterBottomLeft