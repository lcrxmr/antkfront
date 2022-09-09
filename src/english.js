import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import Timer from "./components/Countdown/enTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/englishNavbar";
import { Fade } from "react-awesome-reveal";
import Iframe from "react-iframe";
import ReactCardSlider from "react-card-slider-component";
import { Routes, Route, Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import Fadetitle from "./components/enFade";
import Footer from "./components/enFooter";

import "./styles.css";

export default function English() {
  return (
    <div className="App">
      <div id="langButton">
        <Link to="/">
          <button className="lang">FR</button>
        </Link>
        <Link to="/eng">
          <button className="lang">EN</button>
        </Link>
      </div>

      <div className="container" id="navcontainer">
        <Nav />
        {/* <div className="container" id="langButton">
      <button onClick={fr} className="lang">FR</button>
      <button onClick={eng} className="lang">ENG</button>
      </div> */}
      </div>
      {/* // ------ banner */}
      <div id="banner">
        <div className="accroche">
          <Fadetitle />
          <div id="socials">
            <SocialIcon
              url="https://twitter.com/animalnationtk"
              className="socialicon"
              target="_blank"
            />
            <SocialIcon
              url="https://linktr.ee/animalnationtk"
              className="socialicon"
              target="_blank"
            />
            <SocialIcon
              url="https://t.me/ANTKofficialchannel"
              className="socialicon2"
              target="_blank"
            />
          </div>
        </div>
        {/* <div className="bannerbutton">
          <a
            href="https://drive.google.com/file/d/1SdY1avUtXeHnZzJj9KVjpyPcpB8_6r2G/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">WHITEPAPER</button>
          </a>
        </div> */}
      </div>

      {/* // ---- compte a rebours  */}
      <div className="container" id="count">
        <h3 style={{ color: "red" }}>September 24th 2022</h3>
        <h1>PRIVATE SALE</h1>
        <div>
          <a
            href="https://drive.google.com/file/d/1p2QrpVgWB9KzuPgHOaOec37lWutj7co4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">BUY</button>
          </a>
          <a
            href="https://drive.google.com/file/d/1p2QrpVgWB9KzuPgHOaOec37lWutj7co4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="buttonSales">WHITEPAPER</button>
          </a>
        </div>
        <Timer />
        {/* <ReactCardSlider slides={slides}/> */}
      </div>

      <div id="about">
        <h1>THE ANIMAL NATION APP...</h1>
        <Fade duration={3000}>
          <div className="container" id="produitDiv">
            <div className="container" id="product">
              <img className="animalPic" src={"./logo.png"} />

              <p className="name">Animal Nation Token</p>
            </div>
            <div>
              <p className="description">
                Animal Nation is a blockchain application with an animal
                recognition module that will allow access to a set of functions
                and games focused on the protection and discovery of animals.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* // ------ produit */}
      <div id="produit">
        <h1>PRODUCTS</h1>
        <Fade duration={3000}>
          <div className="container" id="produitDiv">
            <div className="container" id="product">
              <p className="prodname">Love to earn</p>
              <img className="animalPic" src={"./chat.png"} />
            </div>
            <div>
              <p className="description">
                Receive ANTK token rewards when you spend time with your pet.
              </p>
            </div>
          </div>

          <div className="container" id="produitDiv">
            <div>
              <p className="description">
                Receive ANTK token rewards when you help find a lost animal.
              </p>
            </div>
            <div className="container" id="product">
              <img className="animalPic" src={"./chien.png"} />

              <p className="prodname">Find to earn</p>
            </div>
          </div>

          <div className="container" id="produitDiv">
            <div className="container" id="product">
              <p className="prodname">Keep to earn</p>
              <img className="animalPic" src={"./oiseau.png"} />
            </div>
            <div>
              <p className="description">
                Get photos of your pet when you go on vacation without it and
                earn tokens for the person who looks after your pet.
              </p>
            </div>
          </div>

          <div className="container" id="produitDiv">
            <div>
              <p className="description">
                A universe of games that will use animal facial recognition to
                discover the world of animals and make you win tokens.
              </p>
            </div>
            <div className="container" id="product">
              <img className="animalPic" src={"./tigre.png"} />

              <p className="prodname">Play to earn</p>
            </div>
          </div>
        </Fade>
      </div>

      {/* // ----- Roadmap */}
      <div id="roadmap">
        <h1>ROADMAP</h1>
        <Fade duration={3000}>
          <div className="container" id="roadmapDiv">
            <img src={"./roadmap-ENG.png"} id="roadmapPic" />
          </div>
        </Fade>
      </div>

      {/* // ------ Tokenomis  */}

      <div id="tokenomics">
        <h1>TOKENOMICS</h1>
        <Fade duration={3000}>
          <div className="container" id="tokenomicsDiv">
            <img src={"./tokenomics-détouré.png"} id="diagrammePic" />
          </div>
        </Fade>
      </div>

      {/* // ----- team */}

      <div id="team">
        <h1>TEAM</h1>
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
              <p className="legend">Community Manager</p>
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
              <a href="/" target="_blank">
                <img className="profilePic" src={"./logo.png"} />
              </a>
              <p className="name">Jean-Baptiste</p>
              <p className="legend">Developer</p>
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
