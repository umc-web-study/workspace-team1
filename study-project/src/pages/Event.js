import React from "react";
import styled from "styled-components";

import EventItem from "../components/EventItem";

const EventWrapper = styled.section`
    .container{
        margin: 0 7.5rem;
        overflow: visible;
    }
    .title{
        font-size: 1.2rem;
        padding: 1.4rem 0 1.9rem 0;
    }
    hr {
        border: 0;
        width: 100%;
        align: left;
        height: 1px;
        background: black;
        margin: 1rem 0;
      }
`;

const Event = () => {
    return(
        <EventWrapper>
            <div className="container">
                <div className="title">이벤트</div>
                <hr/>
                <div className="event_container">
                    <EventItem/>
                    <EventItem/>
                    <EventItem/>
                    <EventItem/>
                    <EventItem/>
                </div>
            </div>
        </EventWrapper>
    );
};

export default Event;