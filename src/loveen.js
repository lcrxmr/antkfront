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

import Fadetitle from "./components/Fade";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

import "./detailspage.css";

export default function LoveEn(props) {
  return (
    <>
      <MediaQuery minWidth={1000}>
        <div className="headerDetails">
        <a
                      href="/eng"
                      rel="noopener noreferrer"
                    >
        <button className="back">{'<-'}</button>
        </a>
        </div>

        <div className="details">
          <img className="detailsPic" src={"./passeportchatfr.png"} />
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
        <div className="headerDetailsMobile">
        <a
                      href="/eng"
                      rel="noopener noreferrer"
                    >
        <button className="backMobile">{'<-'}</button>
        </a>
        </div>
        <div className="details">
          <img className="detailsPicMobile" src={"./passeportchatfr.png"} />
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
    </>
  );
}
