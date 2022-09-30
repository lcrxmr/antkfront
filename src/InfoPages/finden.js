
import "../App.css";
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MediaQuery from "react-responsive";
import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer/enFooter";

import "./detailspage.css";

export default function FindEn(props) {

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
      <MediaQuery minWidth={1000}>
        <img
          alt=""
          src={"./logo-white.png"}
          // className="d-inline-block align-top"
          id="navlogo"
        />
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
        <img
          alt=""
          src={"./logo-white.png"}
          // className="d-inline-block align-top"
          id="navlogoMobile"
        />
      </MediaQuery>
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
      <h1 id="roadmaptitle">FIND TO EARN</h1>

        <div className="details">
          <img className="detailsPic" src={"./find.png"} />
        </div>

        <div className="details">
          <p className="detailsText">
          This feature alerts app users that an animal has been lost in
                  the geographic area where they are located. A person who
                  encounters a lost animal will be able to perform an
                  identification with animal facial recognition and warn the
                  owner of the presence of his animal.
                  <br/>
                  After validation, an ANTK reward will be sent directly to the
                  person who found your animal.
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
          This feature alerts app users that an animal has been lost in
                  the geographic area where they are located. A person who
                  encounters a lost animal will be able to perform an
                  identification with animal facial recognition and warn the
                  owner of the presence of his animal.
                  <br/>
                  After validation, an ANTK reward will be sent directly to the
                  person who found your animal.
          </p>

        </div>
      </MediaQuery>
      <Footer/>
    </>
  );
}
