import React from 'react';
import Event from './Event/Event';
import Search from './Search/Search';
import LectureList from './Lecture/LectureList';

export default function Main() {
    return (
        <main className={"main"}>
            <Event />
            <Search />
            <LectureList />
        </main>
    );
}