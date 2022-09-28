import "./App.css";
import React, { Component, useState } from "react";
import Timer from "./components/Countdown/enTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-awesome-reveal";
import Iframe from "react-iframe";
import { SocialIcon } from "react-social-icons";
import MediaQuery from "react-responsive";
import { Slide } from "react-awesome-reveal";

import Fadetitle from "./components/Accroche/enFade";
import Footer from "./components/Footer/enFooter";
import Navbar from "./components/Navbar/newNavEn";
import Produit from "./components/Produits/ProduitsEN"

import "./styles.css";

export default function English(props) {

  return (
    <div className="App">
      <MediaQuery minWidth={1000}>
      <div className="headerNew">

        <div  id="navcontainer">
          {/* <Nav /> */}
          <Navbar/>
        </div>
        {/* // ------ banner */}
        <div id="banner">
          <div className="accroche">
            <Fadetitle />
            <img src={"./holocat.png"} className='holocat' />
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
       

        <div id="navcontainer">
          {/* <Nav /> */}
          <Navbar/>
        </div>
        {/* // ------ banner */}
        <div id="bannerMobile">
          <div className="accroche">
            <Fadetitle />
            <img src={"./holocat.png"} className='holocatMobile' />
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
      

      {/* // ---- compte a rebours  */} 
      <div className="countDiv">
        <div className="container" id="count">
          {/* <h2 className="date">September 23rd 2022</h2> */}
          <h1 className="vente">PRIVATE SALE</h1>
          {/* <Timer /> */}
          <br />
          <MediaQuery minWidth={1000}>
            <div className="countbuttons">
            <a href="/private">
              <button className="button">BUY</button>
              </a>
              <a href="/how-to-buy-eng.pdf" target="_blank">
          <button className="howToCountButton">HOW TO BUY</button>
        </a>
            </div>
          </MediaQuery>

          <MediaQuery minWidth={0} maxWidth={1000}>
          
            <a href="/private">
              <button className="buttonMobile">BUY</button>
              </a>
              <a href="/how-to-buy-eng.pdf" target="_blank">
          <button className="howToCountButtonMobile">HOW TO BUY</button>
        </a>
            
          </MediaQuery>

          {/* <ReactCardSlider slides={slides}/> */}
        </div>
        <div className='promotion'>
<img className="promoImage" src={"./prizepool.png"}/>
          </div>
      </div>

      <div id="about">
        <MediaQuery minWidth={1000}>
          
          <Fade duration={3000}>
            <div className="container" id="aboutDiv">
              <div className="container" id="product">
                <img className="aboutPic" src={"./icone_phone.png"} />
              </div>
              <div>
              <h1 id="roadmaptitle">THE ANIMAL NATION APP</h1>
                <p className="description">
                  Animal Nation is a blockchain application with an animal
                  recognition module that will allow access to a set of
                  functions and games focused on the protection and discovery of
                  animals.
                </p>
                <MediaQuery minWidth={1000}>
                  <div>
                    <a
                      href="/white-eng.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="buttonSales">WHITEPAPER</button>
                    </a>
                  </div>
                </MediaQuery>
              </div>
            </div>
          </Fade>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
          <Fade duration={1000}>
            <div className="container" id="produitDivMobile">
              <div className="container" id="productMobile">
                <img className="aboutPicMobile" src={"./icone_phone.png"} />
              </div>
              <div>
              <h1 id="roadmaptitle">THE ANIMAL NATION APP</h1>
                <p className="descriptionMobile">
                  Animal Nation is a blockchain application with an animal
                  recognition module that will allow access to a set of
                  functions and games focused on the protection and discovery of
                  animals.
                </p>
              </div>
              <MediaQuery minWidth={0} maxWidth={1000}>
                <div>
                  <a
                    href="/white-eng.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="buttonSalesMobile">WHITEPAPER</button>
                  </a>
                  <br />
                </div>
              </MediaQuery>
            </div>
          </Fade>
        </MediaQuery>
      </div>

      {/* // ------ produit */}
<Produit/>

      {/* // ----- Roadmap */}
      <div id="roadmap">
        <h1 id="roadmaptitle">ROADMAP</h1>
        <Fade duration={3000}>
          <div className="container" id="roadmapDiv">
            <Slide direction="left">
              <MediaQuery minWidth={1000}>
                <img src={"./roadmap-EN.png"} id="roadmapPic" />
              </MediaQuery>
              <MediaQuery minWidth={0} maxWidth={1000}>
                <img src={"./roadmapeng.png"} id="roadmapPicMobile" />
              </MediaQuery>
            </Slide>
            <MediaQuery minWidth={1000}>
              <div>
                <a
                  href="/roadmap-eng.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttonSales">OPEN</button>
                </a>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div>
                <a
                  href="/roadmap-eng.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttonSalesMobile">OPEN</button>
                </a>
                <br />
              </div>
            </MediaQuery>
          </div>
        </Fade>
      </div>

      {/* // ------ Tokenomis  */}

      <div id="tokenomics">
        <h1 id="roadmaptitle">TOKENOMICS</h1>
        <Fade duration={3000}>
          <div className="container" id="tokenomicsDiv">
            <Slide direction="left">
              <img src={"./tokeneng.png"} id="diagrammePic" />
            </Slide>
          </div>
        </Fade>
      </div>

      {/* // ----- team */}

      <div id="team">
        <h1 id="roadmaptitle">TEAM</h1>
        <Fade duration={5000}>
          <div className="container" id="profileDiv">
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/basileclinet/"
                target="_blank"
              >
                <img className="profilePic" src={"./basile1.jpg"} />
              </a>
              <p className="name">Basile</p>
              <p className="legend">Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/glarochette/"
                target="_blank"
              >
                <img className="profilePic" src={"./guillaume1.jpg"} />
              </a>
              <p className="name">Guillaume</p>
              <p className="legend">Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/jeason-bacoul-742510225/"
                target="_blank"
              >
                <img className="profilePic" src={"./jeasonV1.jpg"} />
              </a>
              <p className="name">Jeason</p>
              <p className="legend">Lead Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/cbtna/?_l=fr_FR"
                target="_blank"
              >
                <img className="profilePic" src={"./charlotte1.jpg"} />
              </a>
              <p className="name">Charlotte</p>
              <p className="legend">Graphist</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./amaury1.jpg"} />
              </a>
              <p className="name">Amaury</p>
              <p className="legend">Developer</p>
            </div>
            <div className="profileCard">
              <img className="profilePic" src={"./LOGO.png"} />

              <p className="name">Jean-Baptiste</p>
              <p className="legend">Blockchain Developer</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/gilles-a-7b220a23a"
                target="_blank"
              >
                <img className="profilePic" src={"./gilles.jpg"} />
              </a>
              <p className="name">Gilles</p>
              <p className="legend">Co-Founder</p>
            </div>
            <div className="profileCard">
              <img className="profilePic" src={"./LOGO.png"} />

              <p className="name">Marina</p>
              <p className="legend">Developer / Co-Founder</p>
            </div>
            {/* <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./LOGO.jpg"} />
              </a>
              <p className="name">XXX</p>
              <p className="legend">Xxxxx</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./LOGO.jpg"} />
              </a>
              <p className="name">Gilles</p>
              <p className="legend">Xxxxx</p>
            </div> */}
          </div>
        </Fade>
      </div>
      {/* // ----- Newsletter  */}
      {/* <div id="newsDiv">
        <h1>NEWSLETTER</h1>
      <Iframe url="https://form.jotform.com/222491824586363"
        width="90%"
        height="300px"
        id="myId"
        className="newsletter"
        display="initial"
        position="relative"/>
      </div> */}
      <Footer />
    </div>
  );
}
