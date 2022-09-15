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

import "./detailspage.css";

export default function KeepFr(props) {
  return (
    <>
      <MediaQuery minWidth={1000}>
        <div className="headerDetails">
        <a
                      href="/"
                      rel="noopener noreferrer"
                    >
        <button className="back">{'<-'}</button>
        </a>
        </div>

        <div className="details">
          <img className="detailsPic" src={"./keep.png"} />
        </div>

        <div className="details">
          <p className="detailsText">
          Le concept de Keep to earn permet de récompenser avec des
                  tokens ANTK, une personne qui garde votre animal pendant que
                  vous êtes absent et qui vous envoie régulièrement des photos
                  en utilisant l'application AnimalNationTK
          </p>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
        <div className="headerDetailsMobile">
        <a
                      href="/"
                      rel="noopener noreferrer"
                    >
        <button className="backMobile">{'<-'}</button>
        </a>
        </div>
        <div className="details">
          <img className="detailsPicMobile" src={"./keep.png"} />
        </div>

        <div className="details">
          <p className="detailsTextMobile">
          Le concept de Keep to earn permet de récompenser avec des
                  tokens ANTK, une personne qui garde votre animal pendant que
                  vous êtes absent et qui vous envoie régulièrement des photos
                  en utilisant l'application AnimalNationTK
          </p>

        </div>
      </MediaQuery>
    </>
  );
}
