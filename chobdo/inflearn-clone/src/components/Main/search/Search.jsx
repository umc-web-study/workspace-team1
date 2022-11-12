import React from 'react';
import styled from "styled-components";

// import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Search() {

  return (
    <SearchWrapper>
      <div className="search">
        <p className="title">인프런에서 성장을 도와드려요</p>
          <form className="search-bar">
            <input
              type="text"
              placeholder="배우고 싶은 지식을 입력해보세요."
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  max-width: 36.25rem;
  margin: 0 auto 1.5rem;
  
  .title {
    font-size: 1.5rem;
    color: #363636;
    display: flex;
    justify-content: center;
    padding: 3rem 0 1.25rem;
  }
  
  .search-bar-wrapper {
    margin-bottom: 0.375rem;
    position: relative;
  }
  
  .search .search-bar {
    position: relative;
  }
  
  .search-bar input {
    padding: 0.875rem 1.25rem;
    background-color: rgba(29, 192, 120, 0.12);
    border: 1px solid rgba(29, 192, 120, 0.24);
    border-radius: 1.75rem;
    max-width: 36.25rem;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: all 200ms ease;
    color: #5f5f5f;
  }
  
  .search .search-bar input:focus {
    background-color: #fff;
    border-color: #dbdbdb;
    box-shadow: 1px 4px 6px 0 rgb(0, 10, 18, 0.1);
  }
  
  .search .search-bar input::placeholder {
    color: #9fcab7;
  }
  
  .search .search-bar input:focus::placeholder {
    color: #dbdbdb;
  }
  
  .search .search-bar button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
    font-size: 1.25rem;
    cursor: pointer;
    color: #363636;
  }
  
  .tag-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .search-active input {
    border-bottom: 1px solid white;
    border-bottom-left-radius: unset;
    border-bottom-right-radius: unset;
  }
  

`