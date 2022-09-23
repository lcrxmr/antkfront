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
import { SocialIcon } from "react-social-icons";
import MediaQuery from "react-responsive";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Slide } from "react-awesome-reveal";
import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Fadetitle from "./components/Fade";
import Footer from "./components/Footer";
import "./detailspage.css";

export default function FindFr(props) {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <>
        <div className="headerNew">
      <div id="navcontainer">
      <header style={{color: "black"}} >
        <img
          alt=""
          src={"./antk_police_black.png"}
          width={120}
          height={120}
          className="d-inline-block align-top"
          id="navlogo"
        />
        <nav ref={navRef} style={{color: "black", backgroundColor: "rgba(250,226,121,1)"}}>
        <a href="/" onClick={hideNavbar}>
            Home
          </a>
          <a href="/white-fr.pdf" target="_blank" onClick={hideNavbar}>
            Whitepaper
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes size={70} />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars size={70} />
        </button>
      </header>
      </div>
      </div>
      <MediaQuery minWidth={1000}>
      <br/>
      <h1 id="roadmaptitle">FIND TO EARN</h1>

        <div className="details">
          <img className="detailsPic" src={"./find.png"} />
        </div>

        <div className="details">
          <p className="detailsText">
          Cette fonction alerte les utilisateurs de l'application qu'un
                  animal a été perdu dans la zone géographique où ils se
                  trouvent. Une personne qui rencontrera un animal perdu pourra
                  réaliser une identification avec la reconnaissance faciale
                  animale et prévenir le propriétaire de la présence de son
                  animal.
                  <br />
                  Apres validation, une récompense en ANTK sera envoyée
                  directement à la personne qui a trouvé votre animal.
          </p>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
      <br/>
      <h1 id="roadmaptitle" style={{marginTop: "50px", fontSize: '100px'}}>FIND TO EARN</h1>
        <div className="details">
          <img className="detailsPicMobile" src={"./find.png"} />
        </div>

        <div className="details">
          <p className="detailsTextMobile">
          Cette fonction alerte les utilisateurs de l'application qu'un
                  animal a été perdu dans la zone géographique où ils se
                  trouvent. Une personne qui rencontrera un animal perdu pourra
                  réaliser une identification avec la reconnaissance faciale
                  animale et prévenir le propriétaire de la présence de son
                  animal.
                  <br />
                  Apres validation, une récompense en ANTK sera envoyée
                  directement à la personne qui a trouvé votre animal.
          </p>

        </div>
      </MediaQuery>
      <Footer/>
    </>
  );
}
