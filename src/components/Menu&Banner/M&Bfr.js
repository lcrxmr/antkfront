import React from 'react';
import MediaQuery from "react-responsive";
import { SocialIcon } from "react-social-icons";

import Navbar from "../Navbar/newNav"
import Fadetitle from "../Accroche/Fade"

export default function ProduitsEN () {
  return (
<>
<MediaQuery minWidth={1000}>
      <div className="headerNew"> 
        {/* <div id="navcontainer"> */}
          <Navbar/>
        {/* </div> */}
        {/* // ------ banner */}
        <div id="banner">
          <div className="accroche">
            <Fadetitle />
            <img src={"./holocat.png"} className='holocat'  />
            <div id="socials">
              <SocialIcon
                url="https://twitter.com/animalnationtk"
                className="socialicon"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="rgb(247, 147, 30)"
              />
              <SocialIcon
                url="https://linktr.ee/animalnationtk"
                className="socialicon"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="rgb(247, 147, 30)"
              />
              <SocialIcon
                url="https://t.me/ANTKofficialchannel"
                className="socialicon2"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="rgb(247, 147, 30)"
              />
            </div>
          </div>
        </div>
      </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
      <div className="headerNewMobile">
        {/* <div id="navcontainer"> */}
          {/* <Nav /> */}
          <Navbar/>
          {/* </div> */}
        </div>
        {/* // ------ banner */}
        <div id="bannerMobile">
          <div className="accroche">
          <img src={"./holocat.png"} className='holocatMobile' />
            <Fadetitle />
            
            <div id="socials">
            <SocialIcon
                url="https://twitter.com/animalnationtk"
                className="socialicon"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="rgb(247, 147, 30)"
              />
              <SocialIcon
                url="https://linktr.ee/animalnationtk"
                className="socialicon"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="rgb(247, 147, 30)"
              />
              <SocialIcon
                url="https://t.me/ANTKofficialchannel"
                className="socialicon2"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="rgb(247, 147, 30)"
              />
            </div>
          
        </div>
      </div>
      </MediaQuery>
</>
  );
};