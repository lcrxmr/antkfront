import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import Timer from "./components/Countdown/Timer";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/navbar";
import { Fade } from "react-awesome-reveal";
import Iframe from "react-iframe";
import ReactCardSlider from "react-card-slider-component";
import { Routes, Route, Link } from "react-router-dom";

import Fadetitle from "./components/Fade";
import Footer from "./components/Footer";

import "./styles.css";

export default function French() {
  const [lang, setLang] = useState("français");
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "promo 1",
      description: "This is a description",
      clickEvent: "sliderClick",
    },
    {
      image: "https://picsum.photos/600/500",
      title: "promo 2",
      description: "This is a second description",
      clickEvent: "sliderClick",
    },
    {
      image: "https://picsum.photos/700/600",
      title: "promo 3",
      description: "This is a third description",
      clickEvent: "sliderClick",
    },
    {
      image: "https://picsum.photos/700/600",
      title: "promo 4",
      description: "This is a third description",
      clickEvent: "sliderClick",
    },
  ];

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
        </div>
        <div className="bannerbutton">
          <a
            href="https://drive.google.com/file/d/1SdY1avUtXeHnZzJj9KVjpyPcpB8_6r2G/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">WHITEPAPER</button>
          </a>
        </div>
      </div>
      {/* // ---- compte a rebours  */}
      <div className="container" id="count">
        <h3 style={{ color: "red" }}>24 Septembre 2022</h3>
        <h1>VENTE PRIVÉE</h1>
        <Timer />
        {/* <ReactCardSlider slides={slides}/> */}
      </div>
      {/* // ------ produit */}
      <div id="produit">
        <h1>PRODUITS</h1>
        <Fade duration={3000}>
          <div className="container" id="produitDiv">
            <div className="container" id="product">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./LOGO.jpg"} />
              </a>
              <p className="name">Produit1</p>
            </div>
            <div>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="container" id="produitDiv">
            <div>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="container" id="product">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./LOGO.jpg"} />
              </a>
              <p className="name">Produit1</p>
            </div>
          </div>
        </Fade>
      </div>
      {/* // ----- Roadmap */}
      <div id="roadmap">
        <h1>ROADMAP</h1>
        <Fade duration={3000}>
          <div className="container" id="roadmapDiv">
            <img src={"./roadmap.jpg"} id="roadmapPic" />
          </div>
        </Fade>
      </div>
      {/* // ----- team */}
      <div id="team">
      <h1>ÉQUIPE</h1>
        <Fade duration={5000}>
          <div className="container" id="profileDiv">
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./basile1.jpg"} />
              </a>
              <p className="name">Basile</p>
              <p className="legend">Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./guillaume1.jpg"} />
              </a>
              <p className="name">Guillaume</p>
              <p className="legend">Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./jeasonV1.jpg"} />
              </a>
              <p className="name">Jeason</p>
              <p className="legend">Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./charlotte1.jpg"} />
              </a>
              <p className="name">Charlotte</p>
              <p className="legend">Graphiste</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./amaury1.jpg"} />
              </a>
              <p className="name">Amaury</p>
              <p className="legend">Développeur</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./LOGO.jpg"} />
              </a>
              <p className="name">Jean-Baptiste</p>
              <p className="legend">Développeur</p>
            </div>
            <div className="profileCard">
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
            </div>
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
