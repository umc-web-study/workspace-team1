import React from 'react';
import FilterButton from './FilterButton';

export default function Filter() {
    return (
        <>
        <FilterButton title="All" />
        <p style={{marginRight: "15px"}}></p>
        <FilterButton title="Breakfast" />
        <p style={{marginRight: "15px"}}></p>
        <FilterButton title="Lunch" />
        <p style={{marginRight: "15px"}}></p>
        <FilterButton title="Shakes" />
        <p style={{marginRight: "15px"}}></p>
        <FilterButton title="Dinner" />
        </>
    );
}