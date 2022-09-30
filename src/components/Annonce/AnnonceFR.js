// import "./App.css";
import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-awesome-reveal";
import Iframe from "react-iframe";
import MediaQuery from "react-responsive";
import { Slide } from "react-awesome-reveal";

import "../Annonce/Annonce.css"

import Timer from "../Countdown/Timer"

export default function AnnonceFR () {
    return (
        <div className="countDiv">
        <div className="container" id="count">
          {/* <h2 className="date">23 Septembre 2022</h2> */}
          <h1 className="vente">VENTE PRIVÉE </h1>
          {/* <Timer /> */}
          <br />
          <MediaQuery minWidth={1000}>
            <div className="countbuttons">
              <a href="/private">
                <button className="button">BUY</button>
              </a>
              <a href="/how-to-buy-fr.pdf" target="_blank">
                <button className="howToCountButton">HOW TO BUY</button>
              </a>
            </div>
          </MediaQuery>

          <MediaQuery minWidth={0} maxWidth={1000}>
            <a href="/private">
              <button className="buttonMobile">BUY</button>
            </a>
            <a href="/how-to-buy-fr.pdf" target="_blank">
              <button className="howToCountButtonMobile">HOW TO BUY</button>
            </a>
          </MediaQuery>

          {/* <ReactCardSlider slides={slides}/> */}
        </div>
        <div className="promotion">
          <img className="promoImage" src={"./prizepoolfr.png"} />
        </div>
      </div>
    );
  };