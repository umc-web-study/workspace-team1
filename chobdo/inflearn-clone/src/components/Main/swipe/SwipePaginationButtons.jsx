import React from 'react';

export default function SwipePaginationButtons({
  keyword,
  paginationButtonClickHandler,
  index,
  currentSlide,
}) {
  return (
    <li key={keyword} className={index === currentSlide ? 'active' : ''}>
      <button 
      type="button" 
      onClick={paginationButtonClickHandler}>
        {keyword}
      </button>
    </li>
  );
}
