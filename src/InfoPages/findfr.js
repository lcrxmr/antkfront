import "../App.css";
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MediaQuery from "react-responsive";
import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
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
