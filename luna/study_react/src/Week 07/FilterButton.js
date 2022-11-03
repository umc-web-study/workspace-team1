import React from 'react';
import styled from 'styled-components';

export default function FilterButton(props) {
    return (
        <>
        <TopFilterButton>{props.title}</TopFilterButton>
        </>
    )
}

const TopFilterButton = styled.button`
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #c8a46b;
    border-radius: 4px;
    color: #c8a46b;
    padding-horizontal: 3px;
`