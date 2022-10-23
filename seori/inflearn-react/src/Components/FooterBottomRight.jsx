import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiNaver, SiBloglovin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import "./FooterBottomRight.css"

function FooterBottomRight() {
    return (
        <div className="footer_bottom_right">
            <a href="https://post.naver.com/inflearn" target="_blank"><SiNaver className="sns-icon" /></a>
            <a href="https://post.naver.com/inflearn" target="_blank"><AiOutlineInstagram className="sns-icon" /></a>
            <a href="https://post.naver.com/inflearn" target="_blank"><SiBloglovin className="sns-icon" /></a>
            <a href="https://post.naver.com/inflearn" target="_blank"><BsYoutube className="sns-icon" /></a>
            <a href="https://post.naver.com/inflearn" target="_blank"><RiFacebookFill className="sns-icon" /></a>
            <a href="https://post.naver.com/inflearn" target="_blank"><AiOutlineTwitter className="sns-icon" /></a>
        </div>
    )
}

export default FooterBottomRight