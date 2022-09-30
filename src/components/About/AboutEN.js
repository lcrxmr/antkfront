// import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-awesome-reveal";
import MediaQuery from "react-responsive";

import "../About/About.css"

export default function AboutEN () {
    return (
        <div id="about">
        <MediaQuery minWidth={1000}>
          <Fade duration={3000}>
            <div className="container" id="aboutDiv">
              <div className="container" id="product">
                <img className="aboutPic" src={"./icone_phone.png"} />
              </div>
              <div>
                <h1 id="roadmaptitle">THE ANIMAL NATION APP</h1>
                <p className="description">
                  Animal Nation is a blockchain application with an animal
                  recognition module that will allow access to a set of
                  functions and games focused on the protection and discovery of
                  animals.
                </p>
                <MediaQuery minWidth={1000}>
                  <div>
                    <a
                      href="/white-eng.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="buttonSales">WHITEPAPER</button>
                    </a>
                  </div>
                </MediaQuery>
              </div>
            </div>
          </Fade>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
          <Fade duration={1000}>
            <div className="container" id="produitDivMobile">
              <div className="container" id="productMobile">
                <img className="aboutPicMobile" src={"./icone_phone.png"} />
              </div>
              <div>
                <h1 id="roadmaptitle">THE ANIMAL NATION APP</h1>
                <p className="descriptionMobile">
                  Animal Nation is a blockchain application with an animal
                  recognition module that will allow access to a set of
                  functions and games focused on the protection and discovery of
                  animals.
                </p>
              </div>
              <MediaQuery minWidth={0} maxWidth={1000}>
                <div>
                  <a
                    href="/white-eng.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="buttonSalesMobile">WHITEPAPER</button>
                  </a>
                  <br />
                </div>
              </MediaQuery>
            </div>
          </Fade>
        </MediaQuery>
      </div>
    );
  };