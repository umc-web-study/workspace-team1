import React from "react";
import Top from "./Top";
import NavItems from "./NavItems";
import Banner from "./Banner";
import BannerImage from "./BannerImage";

function Header() {
    return (
        <header>
            <div>
                <Top></Top>
            </div>
            <nav>
                <NavItems></NavItems>
            </nav>
            <div className="flex_div">
                <Banner></Banner>
                <BannerImage></BannerImage>
            </div>
        </header>
    )
}

export default Header