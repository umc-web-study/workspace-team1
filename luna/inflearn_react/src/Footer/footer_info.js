import React from "react";
import '../App.css';

function FooterInfo() {
    return (
        <>
        <div class="footer_bottom">
            <div className="side_space" style={{ width: "76%", borderBottom: "1px solid rgb(227, 227, 227)", marginTop: "13px", textAlign: "center"  }} />
            <div class="footer_bottom_left">
                <img alt="inflearn_text_logo" src="image/inflearn_text_logo.png" height="18px" style={{float: "left", marginRight: "10px", marginTop: "3px"}}/>
                <p class="footer_bottom_left_title">|</p>
                <p class="footer_bottom_left_title">개인정보취급방침</p>
                <p class="footer_bottom_left_title" style={{marginLeft: "5px"}}>|</p>
                <p class="footer_bottom_left_title">이용약관</p>
            </div>
            <br/><br/>
            <div class="footer_bottom_left_content_div">
                <p class="footer_bottom_left_content">(주)인프랩 | 대표자: 이형주 | 사업자번호: 499-81-00612 사업자 정보 확인</p><br/><br/>
                <p class="footer_bottom_left_content">통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 | 이메일: info@inflearn.com</p><br/><br/>
                <p class="footer_bottom_left_content">주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호</p><br/><br/>
            </div>
            <div class="footer_bottom_left_copyright">
                <p class="footer_bottom_left_content" style={{lineHeight: "25px"}}>&copy; INFLAB. ALL RIGHTS RESERVED</p>
            </div>
            <div class="footer_bottom_right">
                <img alt="main_naver_post" src="image/main_naver_post.png" class="footer_bottom_right_icon"/>
                <img alt="main_naver_blog" src="image/main_naver_blog.png" class="footer_bottom_right_icon"/>
                <img alt="main_instagram" src="image/main_instagram.png" class="footer_bottom_right_icon"/>
                <img alt="main_youtube" src="image/main_youtube.png" class="footer_bottom_right_icon"/>
                <img alt="main_facebook" src="image/main_facebook.png" class="footer_bottom_right_icon"/>
                <img alt="main_twitter" src="image/main_twitter.png" class="footer_bottom_right_icon"/>
            </div>
        </div>
        </>
    )
}

export default FooterInfo;