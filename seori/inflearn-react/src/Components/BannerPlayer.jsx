import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { React, useState } from "react";
import { BsChevronLeft, BsFillPlayFill, BsChevronRight, BsFillPauseFill } from "react-icons/bs";

function BannerPlayer() {
    const [pageNum, setPageNum] = useState(1)
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className="banner_player">
            <span>{pageNum}/8</span>
            <div>
                <BsChevronLeft onClick={() => {
                    if (pageNum !== 1) {
                        setPageNum(pageNum - 1)
                    } else {
                        setPageNum(8)
                    }
                }}/>
                <FontAwesomeIcon icon={isClicked ? faPlay : faPause} 
                onClick={() => (setIsClicked(!isClicked))} style={{width: '30px', paddingBottom: '2px'}}/>
                <BsChevronRight onClick={() => {
                    if (pageNum !== 8) {
                        setPageNum(pageNum + 1)
                    } else {
                        setPageNum(1)
                    }
                }}/>
            </div>
        </div>
    )
}

export default BannerPlayer