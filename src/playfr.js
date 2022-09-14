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
 
export default function PlayFr(props) {
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
          <img className="detailsPic" src={"./play.jpg"} />
        </div>

        <div className="details">
          <p className="detailsText">
          Les jeux et des tournois vous feront réaliser des safaris
                  photos où vont se mêler le réel avec la reconnaissance animale
                  et des animaux en réalité augmentée.
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
          <img className="detailsPicMobile" src={"./play.jpg"} />
        </div>

        <div className="details">
          <p className="detailsTextMobile">
          Les jeux et des tournois vous feront réaliser des safaris
                  photos où vont se mêler le réel avec la reconnaissance animale
                  et des animaux en réalité augmentée.
          </p>

        </div>
      </MediaQuery>
    </>
  );
}
