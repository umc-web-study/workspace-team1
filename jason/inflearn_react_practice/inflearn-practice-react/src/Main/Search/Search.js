import React from 'react';

export default function Search() {
    return (
        <div className={"main_search"}>
            <div className={"container"}>
                <div className={"main_search-container"}>
                    <h1>배우고, 나누고, 성장하세요</h1>
                    <div className={"main_search-input"}>
                        <input type="text" placeholder="배우고 싶은 지식을 입력해보세요."/>
                    </div>
                </div>
            </div>
        </div>
    );
}