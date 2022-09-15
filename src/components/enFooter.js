import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import { SocialIcon } from 'react-social-icons';
import "./Footer.css";

export default function Footer () {
  return (
    <CDBFooter className="shadow" justifyContent="center" id="aide">
      <CDBBox className="footerBox" display="flex" flex="column"   style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="around" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src={"./antk_police.png"} width="200px" id='logo'/>
              {/* <span className="ml-3 h5 font-weight-bold">ANTK</span> */}
            </a>
            <p className="my-3" style={{ width: '250px' }}>
              
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              ANTK
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="#about">A propos</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Contact
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <CDBFooterLink onClick={() => window.location = 'mailto:info@antk.io'} id="email">Email</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Aide
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/cdgeng.pdf" target="_blank">Terms and conditions</CDBFooterLink>
              <CDBFooterLink href="#">FAQ</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBBox>
      <div id="socialsFooter">
          <SocialIcon url="https://twitter.com/animalnationtk" className="socialiconFooter" target="_blank" style={{ height: 80, width: 80 }}
                bgColor="white"/>
          <SocialIcon url="https://linktr.ee/animalnationtk" className="socialiconFooter" target="_blank" style={{ height: 80, width: 80 }}
                bgColor="white"/>
          <SocialIcon url="https://t.me/ANTKofficialchannel" className="socialiconFooter" target="_blank" style={{ height: 80, width: 80 }}
                bgColor="white"/>
        </div>
        <small className="text-center mt-5">&copy; ANTK 2022. All rights reserved.</small>
    </CDBFooter>
  );
};