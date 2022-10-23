import { React, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import styled from "styled-components";

const StyledIcon = styled.i`
    color: black;
    font-size: 23px;
    margin-right: 25px;
`

function MainSearch(props) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div class="main_search">
            <p>{props.name}</p>
            <div style={{backgroundColor: isFocused ? 'white' : '#E4F7EF', borderColor: isFocused ? 'lightgray' : '#A3CDBA'}}>
                <input type="text" placeholder={props.placeholder} 
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)} />
                <StyledIcon><HiOutlineSearch /></StyledIcon>
            </div>
        </div>
    )
}

export default MainSearch