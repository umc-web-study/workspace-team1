import React from "react";
import NavItems from "./NavItems";
import Banner from "../Main/Banner";
import BannerImage from "../Main/BannerImage";

function Main() {
    return (
        <main>
            <nav>
                <NavItems></NavItems>
            </nav>
            <div className="flex_div">
                <Banner></Banner>
                <BannerImage></BannerImage>
            </div>
        </main>
    )
}

export default Main