import React from 'react';
import styled from 'styled-components';

export default function MenuItem() {
    return (
        <>
            <MenuImage src="image\menuitem01.jpeg" alt="menuitem01"/>
        </>
    )
}

const MenuImage = styled.img `
    width: 24%;
    height: 12%;
    border-radius: 1em;
    border: 4px solid #c8a46b;
`