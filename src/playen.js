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

export default function PlayEn(props) {
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
        <div className="headerDetailsMobile">
        <a
                      href="/eng"
                      rel="noopener noreferrer"
                    >
        <button className="backMobile">{'<-'}</button>
        </a>
        </div>
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
    </>
  );
}
