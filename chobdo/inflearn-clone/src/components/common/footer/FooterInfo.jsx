import React from 'react';
import styled from 'styled-components';

import {ReactComponent as InflearnLogo} from '/Users/minselim/projects/my-inflearn-clone/src/assets/inflearn-logo.svg';

export default function FooterInfo() {

  return (
    <InfoWrapper>
      <div className="anchors">
        <a className="logo">
          <InflearnLogo />
        </a>
        <a className="anchor-item">개인정보취급방침</a>
        <a className="anchor-item">이용약관</a>
      </div>
      <FooterContents>
        <span className="corporation-name">(주)인프랩 | </span>대표자: 이형주 |
        사업자번호: 499-81-00612 <a href="mailto:info@inflearn.com" className='footer-info'>사업자 정보 확인</a>
        <br />
        통신판매업: 2018-성남분당B-0062 | 개인정보보호책임자: 이동욱 | 이메일:{' '}
        <a href="#" className='footer-email'>info@inflearn.com</a>
        <br />
        주소: 경기도 성남시 분당구 대왕판교로 660 유스페이스 1A동 405호
      </FooterContents>
      <div className="copyright">©INFLAB. ALL RIGHTS RESERVED</div>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  color: #bdbdbd;
  font-size: 0.75rem;
  margin-bottom: 0.3em;
  letter-spacing: 0.001rem;

  .anchors {
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .anchors .logo #icon_brand_logo {
    width: 5.131rem;
  }

  .anchor-item::before {
    content: '|';
    margin: 0 0.7rem;
    font-weight: normal;
  }

  .copyright {
    letter-spacing: normal;
  }
`;

const FooterContents = styled.div`
  font-weight: 400;
  letter-spacing: normal;
  margin-bottom: 0.5rem;

  .footer-info:hover{
    color: #454545;
  }
  .footer-email:hover{
    color: #454545;
  }
`;
