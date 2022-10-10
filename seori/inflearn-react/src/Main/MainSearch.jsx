import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import styled from "styled-components";

const StyledIcon = styled.i`
    color: black;
    font-size: 23px;
    margin-right: 25px;
`

function MainSearch(props) {
    return (
        <div class="main_search">
            <p>{props.name}</p>
            <div>
                <input type="text" placeholder={props.placeholder} />
                <StyledIcon><HiOutlineSearch /></StyledIcon>
            </div>
        </div>
    )
}

export default MainSearch