import React from "react";
import styled from "styled-components";

const EventWrapper = styled.section`
    background-color: green;
`;

const Event = () => {
    return(
        <EventWrapper>
            <div>찹도</div>
        </EventWrapper>
    );
};

export default Event;