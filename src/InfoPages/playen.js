
import "../App.css";
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MediaQuery from "react-responsive";
import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer/enFooter";

import "./detailspage.css";

export default function PlayEn(props) {

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
      <header className='active' >
        <img
          alt=""
          src={"./logo-white.png"}
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
      <MediaQuery minWidth={1000}>
        <br/>
      <h1 id="roadmaptitle">PLAY TO EARN</h1>
        <div className="details">
          <img className="detailsPic" src={"./play.png"} />
        </div>

        <div className="details">
          <p className="detailsText">
          The games and tournaments will give you photographs of how to
                  combine the real with animal recognition and actually
                  increased animals.
          </p>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
      <h1 id="roadmaptitle" style={{marginTop: "50px", fontSize: '100px'}}>PLAY TO EARN</h1>
        <div className="details">
          <img className="detailsPicMobile" src={"./play.png"} />
        </div>

        <div className="details">
          <p className="detailsTextMobile">
          The games and tournaments will give you photographs of how to
                  combine the real with animal recognition and actually
                  increased animals.
          </p>

        </div>
      </MediaQuery>
      {/* <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> */}
      <Footer/>
    </>
  );
}
