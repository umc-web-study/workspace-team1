import React from 'react';
import HeaderTop from './Header/header_top';
import HeaderBottom from './Header/header_bottom';
import MiddleTopBanner from './Middle/middle_top_banner';
import MiddleTopCategory from './Middle/middle_top_category';
import LectureList from './Middle/lecture_list';
import FooterNavi from './Footer/footer_navi'
import FooterInfo from './Footer/footer_info';

function App() {
  return (
    <>
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
    <body>
      <MiddleTopBanner />
      <MiddleTopCategory />
      <LectureList />
      <LectureList />
    </body>
      <br/><br/>
    <footer>
      <FooterNavi />
      <FooterInfo />
    </footer>
    </>
  );
}

export default App;