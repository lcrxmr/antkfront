import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import Timer from "./components/Countdown/Timer";
import "bootstrap/dist/css/bootstrap.min.css";
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

export default function LoveFr(props) {

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
        <nav ref={navRef} style={{color: "black"}}>
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
      <h1 id="roadmaptitle">LOVE TO EARN</h1>

        <div className="details">
          <img className="detailsPic" src={"./keep.png"} />
        </div>

        <div className="details">
          <p className="detailsText">
            Le passeport unique de votre animal va être créé grâce à la
            reconnaissance animale de AnimalNationTK. <br />
            Passez du temps avec votre animal et identifiez le régulièrement
            avec l’application pour conserver le niveau d'énergie du passeport.
            Chaque semaine vous recevrez des tokens ANTK en récompense de votre
            grande amitié avec votre animal.
          </p>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
      <br/>
      <h1 id="roadmaptitle" style={{marginTop: "50px", fontSize: '100px'}}>LOVE TO EARN</h1>
        <div className="details">
          <img className="detailsPicMobile" src={"./keep.png"} />
        </div>
        <div className="details">
          <p className="detailsTextMobile">
            Le passeport unique de votre animal va être créé grâce à la
            reconnaissance animale de AnimalNationTK. <br />
            Passez du temps avec votre animal et identifiez le régulièrement
            avec l’application pour conserver le niveau d'énergie du passeport.
            Chaque semaine vous recevrez des tokens ANTK en récompense de votre
            grande amitié avec votre animal.
          </p>

        </div>
      </MediaQuery>
      <Footer />
    </>
  );
}
