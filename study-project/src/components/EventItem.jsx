import styled from "styled-components";

import adImg from "../img/ad.png";

const EventWrapper = styled.section`
    .ad_row{
        display: flex;
    }
    .ad_container{
        width: 35.125rem;
        margin: 0.5rem 1.3rem;
    }
    .adImg {
        width: 35.625rem;
        height: 14.25rem;
    }
    .text_container{
        display: flex;
        justify-content: space-between;
    }
    .dday{
        color: #ff6900;
    }
`


export default function EventItem() {
    return(
        <EventWrapper>
            <div className="ad_row">
                <div className="ad_container">
                    <img className="adImg" src={adImg}/>
                    <div className="text_container">
                        <p>2022.11.18 ~ 2022.12.31</p>
                        <p className="dday">D-40</p>
                    </div>
                </div>
                <div className="ad_container">
                    <img className="adImg" src={adImg}/>
                    <div className="text_container">
                        <p>2022.11.18 ~ 2022.12.31</p>
                        <p className="dday">D-40</p>
                    </div>
                </div>
            </div>
        </EventWrapper>
    );
}
