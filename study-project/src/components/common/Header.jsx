import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchWrapper = styled.section`
  min-width: 70rem;

  .search-bar input {
    padding: 0.875rem 1.25rem;
    background-color: #f5f5f5;
    border-radius: 1.75rem;
    max-width: 36.25rem;
    width: 100%;
    height: 2.75rem;
    color: #a3a3a3;
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
`;
const Header = styled.section`
  .container {
    display: flex;
    flex-direction: row;
  }

  .header-container {
    display: flex;
    align-items: center;
    padding: 2rem 2.5rem;
  }

  .logo {
    font-size: 1.5rem;
    margin: 0 3rem 0 0;
  }

  nav {
    flex: 1 1;
    display: flex;
    justify-content: center;
    padding: 1rem;
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
    font-weight: bold;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const navMenu = [
  { menu: "홈", link: "/" },
  { menu: "카테고리", link: "/category" },
  { menu: "이벤트", link: "/event" },
];

export default function HeaderPage() {
  return (
    <Header>
      <div className="conatiner">
        <div className="header-container">
          {/* 로고 */}
          <LogoLink to="/">
            <h1 className="logo">제이슨과 아이들</h1>
          </LogoLink>
          {/* 검색창 */}
          <SearchWrapper>
            <div className="search">
              <form className="search-bar">
                <input type="text" placeholder="어떤 상품을 찾으시나요?" />
                <button>
                  {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                </button>
              </form>
            </div>
          </SearchWrapper>
        </div>
        {/* 네비게이션 */}
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
        </nav>
      </div>
    </Header>
  );
}
