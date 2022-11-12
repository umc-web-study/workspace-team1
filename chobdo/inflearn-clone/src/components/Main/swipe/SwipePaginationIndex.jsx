import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function SwipePaginationIndex({
  length,
  play,
  currentSlide,
  rightArrowClickHandler,
  leftArrowClickHandler,
  swipePlayHandler,
}) {
  return (
    <div className="swipe-pagination-controller">
      <span className="swipe-pagination-index">
        <span>{currentSlide + 1}</span>/<span>{length}</span>
      </span>
      <div className="swipe-page-control-button-container">
        <button
          aria-label="left-btn"
          onClick={leftArrowClickHandler}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {/* play & pause */}
        <button 
          aria-hidden="true" 
          onClick={swipePlayHandler}>
          <FontAwesomeIcon icon={play ? faPause : faPlay} />
        </button>
        <button
          aria-label="right-btn"
          onClick={rightArrowClickHandler}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
