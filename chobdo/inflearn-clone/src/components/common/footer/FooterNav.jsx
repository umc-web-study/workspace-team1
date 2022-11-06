import React from 'react';
import styled from 'styled-components';

import { navFooters } from './navFooters';

export default function FooterNav() {

  return (
    <Nav>
      {navFooters.map((nav, index) => (
        <li className="nav-item" key={nav.title + index}>
          <h3>{nav.title}</h3>
          <NavContents>
            {nav.contents.map(content => (
              <a className="nav-content-item" key={content}>
                {content}
              </a>
            ))}
          </NavContents>
        </li>
      ))}
    </Nav>
  );
}

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2em 1.25em;
  border-bottom: 1px solid #444;

  .nav-item {
    font-size: 0.875rem;
    line-height: 1.43;
    margin-right: 1.25rem;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    color: #eee;
    font-weight: 700;
    letter-spacing: 0.01rem;
  }
`;

const NavContents = styled.div`
  display: flex;
  flex-direction: column;

  .nav-content-item {
    color: #bdbdbd;
    margin-bottom: 0.438rem;
  }

  .nav-content-item:hover{
    text-decoration: underline;
  }

`;
