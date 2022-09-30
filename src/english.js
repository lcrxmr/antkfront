import "./App.css";
import React, { Component, useState } from "react";
import Timer from "./components/Countdown/enTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-awesome-reveal";
import Iframe from "react-iframe";
import MediaQuery from "react-responsive";
import { Slide } from "react-awesome-reveal";

import Footer from "./components/Footer/enFooter";
import Produit from "./components/Produits/ProduitsEN";
import Menu from "./components/Menu&Banner/M&Ben";
import Team from "./components/Team/Teamen";
import Annonce from "./components/Annonce/AnnonceEN";
import About from "./components/About/AboutEN"

import "./styles.css";

export default function English(props) {
  return (
    <div className="App">
      <Menu />

      {/* // ---- compte a rebours  */}
      <Annonce />

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
