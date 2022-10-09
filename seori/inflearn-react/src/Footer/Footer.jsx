import React from "react";
import FooterCategory from "./FooterCategory";
import FooterBottomLeft from "./FooterBottomLeft";
import FooterBottomRight from "./FooterBottomRight";

function Footer() {
    return (
        <footer>
            <FooterCategory />
            <FooterCategory />
            <FooterCategory />
            <FooterCategory />
            <FooterCategory />
            <hr />
            <div className="footer_bottom">
                <FooterBottomLeft />
                <FooterBottomRight />
            </div>
        </footer>
    )
}

export default Footer