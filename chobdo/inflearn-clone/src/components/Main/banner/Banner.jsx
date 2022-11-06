import React from 'react';
import { useState } from 'react';
import styled from "styled-components";

import { banners } from './banners';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function Banner() {
  const [bannerPage, setBannerPage] = useState(0);

  const [leftButtonDisabled, setLeftButtonDisabled] = useState(false);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  const lastPage = -((banners.length - 1) * 100);

  const bannerRightPaginationHandler = () => {
    setBannerPage(prevState => prevState - 100);
  };

  const bannerLeftPaginationHandler = () => {
    setBannerPage(prevState => prevState + 100);
  };

  useEffect(() => {
    if (bannerPage === lastPage) {
      setRightButtonDisabled(true);
    } else {
      setRightButtonDisabled(false);
    }

    if (bannerPage === 0) {
      setLeftButtonDisabled(true);
    } else {
      setLeftButtonDisabled(false);
    }
  }, [bannerPage, lastPage]);

  return (
    <BannerWrapper>
      <ul
        className="banner-container"
        style={{ transform: `translate(${bannerPage}vw)` }}>
        {banners.map(banner => (
          <li
            style={{ backgroundImage: `url(${banner.background}` }}
            key={banner.title}>
            <div className="banner-item-wrapper">
              <a className="banner-item">
                <h3 style={{ color: banner.color }}>{banner.title}</h3>
                <button className="banner-anchor" type="button">
                  {banner.anchor}
                </button>
              </a>
              <div className="banner-swipe-button-container">
                <button
                  className={`banner-swipe-button ${
                    leftButtonDisabled ? 'banner-swipe-button--disabled' : ''
                  }`}
                  type="button"
                  aria-label="왼쪽"
                  onClick={bannerLeftPaginationHandler}
                  disabled={leftButtonDisabled}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className={`banner-swipe-button ${
                    rightButtonDisabled ? 'banner-swipe-button--disabled' : ''
                  }`}
                  type="button"
                  aria-label="오른쪽"
                  onClick={bannerRightPaginationHandler}
                  disabled={rightButtonDisabled}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="banner-pagination-container">
                {banners.map((banner, index) => (
                  <span
                    className={`banner-pagination ${
                      bannerPage === -(index * 100)
                        ? 'banner-pagination--active'
                        : ''
                    }`}
                    onClick={() => setBannerPage(-(index * 100))}
                    key={banner.title}></span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.section`
  padding: 1.5rem 0;
  overflow: hidden;
  
  .banner-container {
    width: 300vw;
    transition: transform 200ms;
    display: flex;
  }
  
  .banner-container li {
    padding: 2.25rem;
    background-position: 40%;
    width: 100vw;
    transition: all 500ms ease;
  }
  
  .banner-item-wrapper {
    max-width: 75rem;
    margin: 0 auto;
    position: relative;
  }
  
  .banner-item {
    display: block;
    padding: 0 0.625rem;
  }
  
  .banner-container h3 {
    font-weight: 400;
    font-size: 1.125rem;
    letter-spacing: 0.01rem;
    margin-bottom: 1em;
    white-space: pre-wrap;
  }
  
  .banner-anchor {
    color: #1dc078;
    background-color: white;
    font-weight: 700;
    padding: 0.75em 1em;
    border-radius: 4px;
    line-height: normal;
  }
  
  .banner-swipe-button-container {
    position: absolute;
    bottom: -1.25rem;
    right: 0;
  }
  
  .banner-swipe-button {
    width: 1.75rem;
    height: 1.75rem;
    color: #1e1e1e;
    background-color: white;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  
  .banner-swipe-button:first-child {
    margin-right: 0.25rem;
  }
  
  .banner-swipe-button--disabled {
    background-color: hsla(0, 0%, 97.6%, 0.8);
    color: #979797;
  }
  
  .banner-pagination-container {
    display: flex;
    height: 0.375rem;
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translate(-50%);
  }
  
  .banner-pagination {
    width: 0.375rem;
    background-color: white;
    opacity: 0.48;
    margin-right: 0.625rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 500ms ease;
  }
  
  .banner-pagination--active {
    width: 2rem;
    opacity: 1;
  }
  
  .banner-pagination:last-child {
    margin-right: 0;
  }
`