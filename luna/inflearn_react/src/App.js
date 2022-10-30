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
      <MiddleTopBanner tag="추천 학습 로드맵" title1="왕초보를 위한" title2="Lv. 1 인프런 로드맵 📖" content="인프런이 처음이라면, 길라잡이가 되어드릴게요."/>
      <MiddleTopCategory />
      <LectureList title="무료강의? 오히려 좋아 ✨"/>
      <LectureList title="유료강의? 오히려 별로야 😀"/>
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