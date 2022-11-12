import React from "react";
import styled from "styled-components";

import Swiper from "../components/Main/swipe/Swiper";
import Search from "../components/Main/search/Search";
// import NewArticle from "../components/Main/article/new/New"
import Banner from "../components/Main/banner/Banner";
import Apply from "../components/Main/apply/Apply";

const Home = () => {
    return (
      <MainWrapper>
        <Swiper />
        <Search />
        {/* <NewArticle /> */}
        <Banner />
        <Apply />
      </MainWrapper>
    );
  };
  
export default Home;

const MainWrapper = styled.main`
  overflow-x: hidden;
  overflow-y: hidden;
`;