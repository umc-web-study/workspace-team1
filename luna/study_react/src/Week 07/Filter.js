import React from 'react';
import styled from 'styled-components';
import FilterButton from './FilterButton';

export default function Filter() {
    return (
        <>
        <FilterButton title="All" />
        <Space />
        <FilterButton title="Breakfast" />
        <Space />
        <FilterButton title="Lunch" />
        <Space />
        <FilterButton title="Shakes" />
        <Space />
        <FilterButton title="Dinner" />
        </>
    );
}

const Space = styled.p `
    margin-right: 15px;
`