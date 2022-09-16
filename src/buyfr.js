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
import Footer from "./components/Footer";
import Navbar from "./newNav";

import "./buy.css";

export default function French(props) {
  const [description, setDescription] = useState("");

  const Description = () => (
    <div id="currency">
      <div className="container" id="buyDiv">
        <div className="description">
          Ici le reste de ce qu'il faut pour une currency
        </div>
      </div>
    </div>
  );

  const Description2 = () => (
    <div id="currency">
      <div className="container" id="buyDiv">
        <div className="description">Ici le reste de l'autre currency</div>
      </div>
    </div>
  );

  var handleDescription = () => setDescription(Description);
  var handleDescription2 = () => setDescription(Description2);

  // if (currency == 'EUR'){
  //     return Description
  // }
  // if (currency == 'USD'){
  //     return Description2
  // }

  return (
    <div className="App">
      <MediaQuery minWidth={1000}>
        <div className="headerBuy">
          <div id="navcontainer">
            <Navbar />
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
        <div className="headerBuyMobile">
          <div id="navcontainer">
            <Navbar />
          </div>
        </div>
      </MediaQuery>

      <div id="buyAccueil">
        <div className="ventePrivée">
          <h1>VENTE PRIVÉE</h1>
          <h3>Vous êtes connecté</h3>
        </div>
        <div className="userInfo">
          <lo>
            <span>Prix de l'ETH: </span>
            <span>Wallet Address: </span>
            <span>Balance USDT: </span>
            <span>Balance ETH: </span>
          </lo>
        </div>
      </div>

      {/* // ----- currency */}

      <div id="buy">
        <MediaQuery minWidth={1000}>
          <h1 id="roadmaptitle">ACHETER DES ANTK</h1>
          <Fade duration={1000}>
            <div className="container" id="buyDiv">
              <div id="product">
                <img className="aboutPic" src={"./LOGO.png"} />

                <p className="name">Animal Nation Token</p>
              </div>

              <div>
                <MediaQuery minWidth={1000}>
                  <div>
                    <h1 className="currencyTitle">SELECT CURRENCY</h1>
                    <button
                      className="button"
                      onClick={() => {
                        handleDescription();
                      }}
                    >
                      {" "}
                      USD{" "}
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        handleDescription2();
                      }}
                    >
                      {" "}
                      EUR{" "}
                    </button>
                  </div>
                </MediaQuery>

                <MediaQuery minWidth={0} maxWidth={1000}>
                  <div>
                    <h1 className="currencyTitle">SELECT CURRENCY</h1>
                    <button
                      className="button"
                      onClick={() => {
                        handleDescription();
                      }}
                    >
                      {" "}
                      USD{" "}
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        handleDescription2();
                      }}
                    >
                      {" "}
                      EUR{" "}
                    </button>
                  </div>
                </MediaQuery>
              </div>
            </div>
          </Fade>
        </MediaQuery>

        <MediaQuery minWidth={0} maxWidth={1000}>
          <h1 id="roadmaptitle">ACHETER DES ANTK</h1>
          <Fade duration={1000}>
            <div className="container" id="buyDiv">
              <div id="product">
                <img className="aboutPic" src={"./LOGO.png"} />

                <p className="name">Animal Nation Token</p>
              </div>

              <div>
                <MediaQuery minWidth={1000}>
                  <div>
                    <h1 className="currencyTitle">SELECT CURRENCY</h1>
                    <button
                      className="button"
                      onClick={() => {
                        handleDescription();
                      }}
                    >
                      {" "}
                      USD{" "}
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        handleDescription2();
                      }}
                    >
                      {" "}
                      EUR{" "}
                    </button>
                  </div>
                </MediaQuery>

                <MediaQuery minWidth={0} maxWidth={1000}>
                  <div>
                    <h1 className="currencyTitle">SELECT CURRENCY</h1>
                    <button
                      className="button"
                      onClick={() => {
                        handleDescription();
                      }}
                    >
                      {" "}
                      USD{" "}
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        handleDescription2();
                      }}
                    >
                      {" "}
                      EUR{" "}
                    </button>
                  </div>
                </MediaQuery>
              </div>
            </div>
          </Fade>
        </MediaQuery>
      </div>

      {description}

      <Footer />
    </div>
  );
}
