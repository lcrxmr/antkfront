import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

export default function Footer () {
  return (
    <CDBFooter className="shadow" justifyContent="center">
      <CDBBox className="footerBox" display="flex" flex="column"   style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="around" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={"./LOGO.jpg"} width="100px" id='logo'/>
              <span className="ml-3 h5 font-weight-bold">ANTK</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              ANTK
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">A propos</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Aide
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Conditions Générales</CDBFooterLink>
              <CDBFooterLink href="/">FAQ</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBBox>
      <div id="socialsFooter">
          <SocialIcon url="https://twitter.com/animalnationtk" className="socialiconFooter"/>
          <SocialIcon url="https://linktr.ee/animalnationtk" className="socialiconFooter"/>
          <SocialIcon url="https://t.me/ANTKofficialchannel" className="socialiconFooter"/>
        </div>
        <small className="text-center mt-5">&copy; ANTK 2022. All rights reserved.</small>
    </CDBFooter>
  );
};