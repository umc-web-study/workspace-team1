import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as InflearnIcon } from "/Users/minselim/projects/my-inflearn-clone/src/assets/inflearn-icon.svg";
import { ReactComponent as RecruitIcon } from "/Users/minselim/projects/my-inflearn-clone/src/assets/recruit-icon.svg";
import {ReactComponent as InflearnLogo} from '/Users/minselim/projects/my-inflearn-clone/src/assets/inflearn-logo.svg';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const navMenu = [
  { menu: "강의", link: "/" },
  { menu: "로드맵", link: "/" },
  { menu: "멘토링", link: "/" },
  { menu: "커뮤니티", link: "/" },
  { menu: "인프런", link: "/" },
];

export default function Inflab() {
  return (
    <>
      <InflabWrapper>
        <div className="inflab-container">
          <ul>
            <li>
              <Link to="/" className="bold">
                <InflearnIcon className="inflab-icon" />
                교육
              </Link>
            </li>
            <span className="divider">|</span>
            <li>
              <Link to="/">
                <RecruitIcon className="inflab-icon" />
                채용
              </Link>
            </li>
          </ul>
          <Link to="/" className="inflab-link">
            지식공유 참여
          </Link>
        </div>
      </InflabWrapper>
      <Header>
        <div className="header-container">
          <LogoLink to="/">
            <InflearnLogo />
            <h1 className="sr-only">인프런</h1>
          </LogoLink>
          <nav>
            <ul>
              {navMenu.map((menu, index) => (
                <li key={menu + index}>
                  <Link to={menu.link} className="menu-item">
                    {menu.menu}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav-right">
              <div className="search">
                <input type="text" />
                <button type="button">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
              <Link to="/" className="sign-in">
                <button className="signin-btn">로그인</button>
              </Link>
              <Link to="/" className="sign-up">
                <button className="sigup=btn">회원가입</button>
              </Link>
            </div>
          </nav>
        </div>
      </Header>
    </>
  );
}

const InflabWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0 9.5rem;
  font-size: 0.875rem;
  font-color: #ffff;
  height: 2.5rem;
  border-bottom: 1px solid #f1f3f5;

  .inflab-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // 미디어쿼리 나중에 추가
  }

  .inflab-container > ul {
    display: flex;
  }

  .inflab-container > li {
    display: flex;
    width: 100%;
    margin: 0 auto;
  }

  .inflab-container .divider {
    color: #d5dbe2;
    // font-size: 0.75rem;
    margin: 0 0.5rem;
  }

  .inflab-container li .bold {
    font-weight: bold;
    color: #1b1c1d;
  }

  .inflab-icon {
    margin-right: 0.25em;
  }

  .inflab-link {
    color: #3e4042;
    font-size: 0.875rem;
  }
`;

const Header = styled.header`
  // sticky 되는지 나중에 확인하기
  position: sticky;

  .header-container {
    max-width: 75em;
    height: 4em;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 2em;
  }

  nav {
    flex: 1 1;
    display: flex;
    justify-content: space-between;
  }

  nav > ul {
    display: flex;
    align-items: center;
    margin-left: 0.7em;
  }

  .menu-item {
    padding: 1em 1em;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: "#4a4a4a";
  }

  .menu-item:hover {
    color: #00c471;
  }

  .nav-right {
    display: flex;
    align-items: center;
  }

  .search {
    position: relative;
    margin-right: 1rem;
  }

  .search > input {
    background-color: #f6f6f6;
    padding: 0.35em 1em;
    border-radius: 3px;
    line-height: 1.5;
    max-width: 9em;
  }

  .search input:hover {
    border: 1px solid #c8c8c8;
  }

  //   box shadow 빛 번짐 줄이기
  .search input:focus {
    border: 2px solid #00c471;
    box-shadow: 0.3px 0.3px 4px 1px #7dccab;
  }

  .search > button {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .sign-in {
    border: 1px solid #c8c8c8;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    letter-spacing: 0.05em;
    margin-right: 0.5rem;
    alin-item: center;
  }
  .sign-up {
    border: 1px solid #c8c8c8;
    padding: 0.25rem 0.3rem;
    border-radius: 3px;
    letter-spacing: 0.05em;
    background-color: #ff7867;
    color: white;
    alin-item: center;
  }
`;
