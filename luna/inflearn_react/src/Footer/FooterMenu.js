import React from "react";

export default function FooterMenu(props) {
    return (
        <>
        <div class="footer_menu_set" style={{paddingLeft: props.paddingLeft, marginRight: props.marginRight}}>
            <p class="footer_menu_set_title">{props.title}</p>
            <p class="footer_menu_set_content">{props.content1}</p>
            <p class="footer_menu_set_content">{props.content2}</p>
            <p class="footer_menu_set_content">{props.content3}</p>
            <p class="footer_menu_set_content">{props.content4}</p>
            <p class="footer_menu_set_content">{props.content5}</p>
        </div>
        </>
    )
}