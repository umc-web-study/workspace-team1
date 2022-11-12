import React from 'react';
import styled from 'styled-components';

import FooterNav from './FooterNav';
import FooterInfo from './FooterInfo';
import FooterAnchor from './FooterAnchor';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterNav />
        <FooterBottom>
          <FooterInfo />
          <FooterAnchor />
        </FooterBottom>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #303740;

  .container {
    max-width: 72rem;
    margin: 0 auto;
  }
`;

const FooterBottom = styled.div`
  padding: 2em 1.25em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
