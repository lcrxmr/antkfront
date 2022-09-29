import "./App.css";
import React, { Component, useState } from "react";
import Timer from "./components/Countdown/Timer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import Iframe from "react-iframe";
import MediaQuery from "react-responsive";
import { Slide } from "react-awesome-reveal";

import Footer from "./components/Footer/Footer";
import Produit from "./components/Produits/ProduitsFR";
import Menu from "./components/Menu&Banner/M&Bfr";
import Team from "./components/Team/Teamfr"

import "./styles.css";

export default function French(props) {
  return (
    <div className="App">
      {/* // -------- menu + banner  */}
      <Menu />

      {/* // ---- compte a rebours  */} 
      <div className="countDiv">
        <div className="container" id="count">
          {/* <h2 className="date">23 Septembre 2022</h2> */}
          <h1 className="vente">VENTE PRIVÉE </h1>
          {/* <Timer /> */}
          <br />
          <MediaQuery minWidth={1000}>
            <div className="countbuttons">
              <a href="/private">
                <button className="button">BUY</button>
              </a>
              <a href="/how-to-buy-fr.pdf" target="_blank">
                <button className="howToCountButton">HOW TO BUY</button>
              </a>
            </div>
          </MediaQuery>

          <MediaQuery minWidth={0} maxWidth={1000}>
            <a href="/private">
              <button className="buttonMobile">BUY</button>
            </a>
            <a href="/how-to-buy-fr.pdf" target="_blank">
              <button className="howToCountButtonMobile">HOW TO BUY</button>
            </a>
          </MediaQuery>

          {/* <ReactCardSlider slides={slides}/> */}
        </div>
        <div className="promotion">
          <img className="promoImage" src={"./prizepoolfr.png"} />
        </div>
      </div>

      {/* // ----- About  */}

      <div id="about">
        <MediaQuery minWidth={1000}>
          <Fade duration={1000}>
            <div className="container" id="aboutDiv">
              <div className="container" id="product">
                <img className="aboutPic" src={"./icone_phone.png"} />
              </div>

              <div>
                <h1 id="roadmaptitle">L'APPLICATION ANIMAL NATION</h1>
                <p className="description">
                  Animal Nation est une application blockchain avec un module de
                  reconnaissance animale qui va permettre d'accéder à un
                  ensemble de fonctions et de jeux centrés sur la protection et
                  la découverte des animaux.
                </p>
                <MediaQuery minWidth={1000}>
                  <div>
                    <a
                      href="/white-fr.pdf"
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
                <h1 id="roadmaptitle">L'APPLICATION ANIMAL NATION</h1>
                <p className="descriptionMobile">
                  Animal Nation est une application blockchain avec un module de
                  reconnaissance animale qui va permettre d'accéder à un
                  ensemble de fonctions et de jeux centrés sur la protection et
                  la découverte des animaux.
                </p>
              </div>
              <MediaQuery minWidth={0} maxWidth={1000}>
                <div>
                  <a
                    href="/white-fr.pdf"
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
      <Produit />

      {/* // ----- Roadmap */}
      <div id="roadmap">
        <h1 id="roadmaptitle">ROADMAP</h1>
        <Fade duration={3000}>
          <div className="container" id="roadmapDiv">
            <Slide direction="left">
              <MediaQuery minWidth={1000}>
                <img src={"./roadmap_FR.png"} id="roadmapPic" />
              </MediaQuery>
              <MediaQuery minWidth={0} maxWidth={1000}>
                <img src={"./roadmapfr.png"} id="roadmapPicMobile" />
              </MediaQuery>
            </Slide>
            <MediaQuery minWidth={1000}>
              <div>
                <a
                  href="/roadmap-fr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttonSales">OUVRIR</button>
                </a>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div>
                <a
                  href="/roadmap-fr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttonSalesMobile">OUVRIR</button>
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
          <Slide direction="left">
            <div className="container" id="tokenomicsDiv">
              <img src={"./tokenfr.png"} id="diagrammePic" />
            </div>
          </Slide>
        </Fade>
      </div>

      {/* // ----- team */}
      <Team/>

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
