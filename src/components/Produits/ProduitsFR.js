import React from 'react';
import { Slide, Fade } from "react-awesome-reveal";
import MediaQuery from "react-responsive";

import "../Produits/produits.css"

export default function ProduitsFR () {
  return (
    <div id="produit">
    <MediaQuery minWidth={1000}>
      <h1 id="roadmaptitle">PRODUITS</h1>
      <Fade duration={3000}>
        {/* <Link to="/lovetoearnfr.pdf" style={{ color: 'inherit', textDecoration: 'inherit'}}> */}
        <Slide direction="left">
          <div
            className="container"
            id="produitDiv"
          >
            <div id="product">

              <img className="animalPic" src={"./chien.png"} />
            </div>
            <div>
            <h1 id="roadmaptitle">LOVE TO EARN</h1>
              <p className="description">
                Recevez des récompenses en token ANTK lorsque vous passez du
                temps avec votre animal.
              </p>
              <br />
              <a href="/love-fr">
                <button className="prodInfo">
                  Info
                </button>
              </a>
            </div>
          </div>
        </Slide>

        <Slide direction="left">
          <div
            className="container"
            id="produitDiv"
          >
            <div id="product">
              <img className="animalPic" src={"./chat.png"} />
            </div>
            <div>
            <h1 id="roadmaptitle">FIND TO EARN</h1>
              <p className="description">
                Recevez des récompenses en token ANTK lorsque vous aidez à
                retrouver un animal perdu.
              </p>
              <br />
              <a href="/find-fr">
                <button  className="prodInfo">
                  Info
                </button>
              </a>
            </div>
          </div>
        </Slide>

        <Slide direction="left">
          <div
            className="container"
            id="produitDiv"
          >
            <div id="product">
              <img className="animalPic" src={"./oiseau.png"} />
            </div>
            <div>
            <h1 id="roadmaptitle">KEEP TO EARN</h1>
              <p className="description">
                Recevez des photos de votre animal lorsque vous partez en
                vacances sans lui et faites gagner des tokens à la personne
                qui s'occupe de votre animal.
              </p>
              <br />
              <a href="/keep-fr">
                <button  className="prodInfo">
                  Info
                </button>
              </a>
            </div>
          </div>
        </Slide>

        <Slide direction="left">
          <div
            className="container"
            id="produitDiv"
          >
            <div id="product">
              <img className="animalPic" src={"./tigre.png"} />
            </div>
            <div>
            <h1 id="roadmaptitle">PLAY TO EARN</h1>
              <p className="description">
                Un univers de jeux qui va utiliser la reconnaissance
                faciale animale pour découvrir le monde des animaux et vous
                faire gagner des tokens.
              </p>
              <br />
              <a href="/play-fr">
                <button className="prodInfo">
                  Info
                </button>
              </a>
            </div>
          </div>
        </Slide>
      </Fade>
    </MediaQuery>

    <MediaQuery minWidth={0} maxWidth={1000}>
      <h1 id="roadmaptitle">PRODUITS</h1>
      <Fade duration={3000}>
        <Slide direction="left">
          <div className="container" id="produitDivMobile">
            <div id="productMobile">

              <img className="animalPicMobile" src={"./chien.png"} />
            </div>
            <br/>
            <div>
            <h1 id="roadmaptitle">LOVE TO EARN</h1>
              <p className="descriptionMobile">
                Recevez des récompenses en token ANTK lorsque vous passez du
                temps avec votre animal.
              </p>
              <br />
              <a href="/love-fr">
                <button className="prodInfoMobile">
                  Info
                </button>
              </a>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div className="container" id="produitDivMobile">
            <div id="productMobile">
              <img className="animalPicMobile" src={"./chat.png"} />
            </div>
            <br/>
            <div>
            <h1 id="roadmaptitle">FIND TO EARN</h1>
              <p className="descriptionMobile">
                Recevez des récompenses en token ANTK lorsque vous aidez à
                retrouver un animal perdu.
              </p>
              <br />
              <a href="/find-fr">
                <button className="prodInfoMobile">
                  Info
                </button>
              </a>
            </div>
          </div>
        </Slide>
        <Slide direction="left">
          <div
            className="container"
            id="produitDivMobile"
          >
            <div id="productMobile">
              <img className="animalPicMobile" src={"./oiseau.png"} />
            </div>

    <br/>
            <div>
            <h1 id="roadmaptitle">KEEP TO EARN</h1>
              <p className="descriptionMobile">
                Recevez des photos de votre animal lorsque vous partez en
                vacances sans lui et faites gagner des tokens à la personne
                qui s'occupe de votre animal.
              </p>
              <br />
              <a href="/keep-fr">
                <button className="prodInfoMobile">
                  Info
                </button>
              </a>
            </div>
          </div>
        </Slide>
       
        <Slide direction="left">
          <div
            className="container"
            id="produitDivMobile"
          >
            <div id="productMobile">
              <img className="animalPicMobile" src={"./tigre.png"} />
            </div>
            <br/>
            <div>
            <h1 id="roadmaptitle">PLAY TO EARN</h1>
              <p className="descriptionMobile">
                Un univers de jeux qui va utiliser la reconnaissance
                faciale animale pour découvrir le monde des animaux et vous
                faire gagner des tokens.
              </p>
              <br />
              <a href="/play-fr">
                <button  className="prodInfoMobile">
                  Info
                </button>
              </a>
            </div>
          </div>
        </Slide>
      </Fade>
    </MediaQuery>
  </div>
  );
};