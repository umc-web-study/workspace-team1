import React from 'react';
import styled from 'styled-components';

import { applies } from './applies';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Apply() {
  return (
    <ApplyWrapper>
      <div className="apply-wrapper">
        <ApplyHeading>
          <h2>다양한 서비스를 신청하세요.</h2>
          <p>
            인프런의 지식공유자 '비즈니스' 대학생 신청방법에 대해 알아보세요.
          </p>
        </ApplyHeading>
        <ApplyItemContainer>
          <ul>
            {applies.map(apply => (
              <li className="apply-item" key={apply.title}>
                <h3>{apply.title}</h3>
                <p>{apply.description}</p>
                <div>
                  <a className="apply-item-anchor">
                    {apply.anchor}
                    <span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </ApplyItemContainer>
      </div>
    </ApplyWrapper>
  );
}

const ApplyWrapper = styled.section`
  padding: 3rem 0;
  background-color: #f9f9f9;

  .apply-wrapper {
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 0.625rem;
  }
`;

const ApplyHeading = styled.header`
  margin-bottom: 1.25rem;

  h2 {
    color: #1e1e1e;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  p {
    color: #757575;
    font-size: 0.9375rem;
  }
`;

const ApplyItemContainer = styled.div`
  min-width: 100%;
  /* overflow-x: hidden; */
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  ul {
    display: flex;
    justify-content: space-between;
    /* width: 100vw; */
  }

  .apply-item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    width: 23.75em;
    height: 20.625em;
    padding: 3em;
    margin: 0.125em;
    margin-right: 0.5em;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .apply-item:last-child {
    margin-right: 0;
  }

  .apply-item h3 {
    color: #363636;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.125;
    margin-bottom: 0.5rem;
  }

  .apply-item p {
    color: #757575;
    white-space: pre-wrap;
    margin-bottom: auto;
  }

  .apply-item-anchor {
    display: inline-block;
    color: white;
    background-color: #1dc078;
    font-weight: 700;
    line-height: 1;
    padding: 0.75rem 1rem;
    border-radius: 30px;
  }

  .apply-item-anchor span {
    margin-left: 0.25rem;
  }
`;
