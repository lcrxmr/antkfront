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
import Team from "./components/Team/Teamfr";
import Annonce from "./components/Annonce/AnnonceFR";
import About from "./components/About/AboutFR"

import "./styles.css";

export default function French(props) {
  return (
    <div className="App">
      {/* // -------- menu + banner  */}
      <Menu />

      {/* // ---- compte a rebours  */}
      <Annonce />

      {/* // ----- About  */}

      <About/>

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
      <Team />

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
