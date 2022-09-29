
import "../App.css";
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MediaQuery from "react-responsive";
import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer/enFooter";

import "./detailspage.css";

export default function LoveEn(props) {

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
      <h1 id="roadmaptitle">LOVE TO EARN</h1>

        <div className="details">
          <img className="detailsPic" src={"./keep.png"} />
        </div>

        <div className="details">
          <p className="detailsText">
          The unique passport of your pet will be created thanks to the
                  animal recognition of AnimalNationTK. Spend time with your pet
                  and identify it regularly with the app to keep the energy
                  level of the passport.
                  <br/>
                  Every week you will receive ANTK tokens as a reward for your
                  great friendship with your pet.
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
      <Footer/>
    </>
  );
}
