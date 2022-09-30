import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-awesome-reveal";
import Iframe from "react-iframe";
import MediaQuery from "react-responsive";
import { Slide } from "react-awesome-reveal";

import Timer from "../Countdown/enTimer"

export default function AnnonceEN () {
    return (
        <div className="countDiv">
        <div className="container" id="count">
          {/* <h2 className="date">September 23rd 2022</h2> */}
          <h1 className="vente">PRIVATE SALE</h1>
          {/* <Timer /> */}
          <br />
          <MediaQuery minWidth={1000}>
            <div className="countbuttons">
              <a href="/private">
                <button className="button">BUY</button>
              </a>
              <a href="/how-to-buy-eng.pdf" target="_blank">
                <button className="howToCountButton">HOW TO BUY</button>
              </a>
            </div>
          </MediaQuery>

          <MediaQuery minWidth={0} maxWidth={1000}>
            <a href="/private">
              <button className="buttonMobile">BUY</button>
            </a>
            <a href="/how-to-buy-eng.pdf" target="_blank">
              <button className="howToCountButtonMobile">HOW TO BUY</button>
            </a>
          </MediaQuery>

          {/* <ReactCardSlider slides={slides}/> */}
        </div>
        <div className="promotion">
          <img className="promoImage" src={"./prizepool.png"} />
        </div>
      </div>
    );
  };