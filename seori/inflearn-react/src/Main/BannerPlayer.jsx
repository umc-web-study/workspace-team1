import React from "react";
import { BsChevronLeft, BsFillPlayFill, BsChevronRight } from "react-icons/bs";

function BannerPlayer(props) {
    return (
        <div className="banner_player">
            <span>{props.name}</span>
            <div>
                <BsChevronLeft />
                <BsFillPlayFill />
                <BsChevronRight />
            </div>
        </div>
    )
}

export default BannerPlayer