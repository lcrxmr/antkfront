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

import Fadetitle from "./components/Fade";
import Footer from "./components/Footer";

import "./styles.css";

export default function French(props) {
  const [showCat, setShowCat] = useState(false);
  const handleCloseCat = () => setShowCat(false);
  const handleShowCat = () => setShowCat(true);

  const [showDog, setShowDog] = useState(false);
  const handleCloseDog = () => setShowDog(false);
  const handleShowDog = () => setShowDog(true);

  const [showBird, setShowBird] = useState(false);
  const handleCloseBird = () => setShowBird(false);
  const handleShowBird = () => setShowBird(true);

  const [showTigre, setShowTigre] = useState(false);
  const handleCloseTigre = () => setShowTigre(false);
  const handleShowTigre = () => setShowTigre(true);

  return (
    <div className="App">
      <div className="container" id="navcontainer">
        <div id="langButton">
          <Link to="/">
            <button className="lang">FR</button>
          </Link>
          <Link to="/eng">
            <button className="lang">EN</button>
          </Link>
        </div>
        <Nav />
        {/* <div className="container" id="langButton">
      <button onClick={fr} className="lang">FR</button>
      <button onClick={eng} className="lang">ENG</button>
      </div> */}
      </div>
      {/* // ------ banner */}
      <div id="banner">
        <div className="accroche">
          <Fadetitle />
          <div id="socials">
            <SocialIcon
              url="https://twitter.com/animalnationtk"
              className="socialicon"
              target="_blank"
            />
            <SocialIcon
              url="https://linktr.ee/animalnationtk"
              className="socialicon"
              target="_blank"
            />
            <SocialIcon
              url="https://t.me/ANTKofficialchannel"
              className="socialicon2"
              target="_blank"
            />
          </div>
        </div>
      </div>
      {/* // ---- compte a rebours  */}
      <div className="container" id="count">
        <h3 style={{ color: "red" }}>23 Septembre 2022</h3>
        <h1 className="vente">VENTE PRIVÉE </h1>
        <MediaQuery minWidth={1000}>
          <div>
            <button className="button">BUY</button>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={0} maxWidth={1000}>
          <div>
            <button className="buttonMobile">BUY</button>
          </div>
        </MediaQuery>
        <br/>
        <Timer />
        {/* <ReactCardSlider slides={slides}/> */}
      </div>

      {/* // ----- About  */}

      <div id="about">
        <MediaQuery minWidth={1000}>
          <h1>L'APPLICATION ANIMAL NATION</h1>
          <Fade duration={1000}>
            <div className="container" id="aboutDiv">
              <div className="container" id="product">
                <img className="animalPic" src={"./LOGO.png"} />

                <p className="name">Animal Nation Token</p>
              </div>
              
              <div>
                <p className="description">
                  Animal Nation est une application blockchain avec un module de
                  reconnaissance animale qui va permettre d'accéder à un
                  ensemble de fonctions et de jeux centrés sur la protection et
                  la découverte des animaux.
                </p>
                <MediaQuery minWidth={1000}>
                  <div>
                    <a
                      href="/white-fr.pdf"
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
          <h1>L'APPLICATION ANIMAL NATION</h1>
          <Fade duration={1000}>
            <div className="container" id="produitDivMobile">
              <div className="container" id="productMobile">
                <img className="animalPicMobile" src={"./LOGO.png"} />

                <p className="nameProductMobile">Animal Nation Token</p>
              </div>
              <div>
                <p className="descriptionMobile">
                  Animal Nation est une application blockchain avec un module de
                  reconnaissance animale qui va permettre d'accéder à un
                  ensemble de fonctions et de jeux centrés sur la protection et
                  la découverte des animaux.
                </p>
              </div>
              <MediaQuery minWidth={0} maxWidth={1000}>
                  <div>
                    <a
                      href="/white-fr.pdf"
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

      {/* // ------ produit */}
      <div id="produit">
        <MediaQuery minWidth={1000}>
          <h1>PRODUITS</h1>
          <Fade duration={3000}>
            <div className="container" id="produitDiv" onClick={handleShowCat}>
              <div className="container">
                <p className="prodname">Love to earn</p>

                <img className="animalPic" src={"./chat.png"} />
              </div>
              <div>
                <p className="description">
                  Recevez des récompenses en token ANTK lorsque vous passez du
                  temps avec votre animal.
                </p>
              </div>
            </div>

            <div className="container" id="produitDiv" onClick={handleShowDog}>
              <div>
                <p className="description">
                  Recevez des récompenses en token ANTK lorsque vous aidez à
                  retrouver un animal perdu.
                </p>
              </div>
              <div className="container" id="product">
                <img className="animalPic" src={"./chien.png"} />

                <p className="prodname">Find to earn</p>
              </div>
            </div>

            <div className="container" id="produitDiv" onClick={handleShowBird}>
              <div className="container" id="product">
                <p className="prodname">Keep to earn</p>
                <img className="animalPic" src={"./oiseau.png"} />
              </div>
              <div>
                <p className="description">
                  Recevez des photos de votre animal lorsque vous partez en
                  vacances sans lui et faites gagner des tokens à la personne
                  qui s'occupe de votre animal.
                </p>
              </div>
            </div>

            <div
              className="container"
              id="produitDiv"
              onClick={handleShowTigre}
            >
              <div>
                <p className="description">
                  Un univers de jeux qui vont utiliser la reconnaissance faciale
                  animale pour découvrir le monde des animaux et vous faire
                  gagner des tokens.
                </p>
              </div>
              <div className="container" id="product">
                <img className="animalPic" src={"./tigre.png"} />

                <p className="prodname">Play to earn</p>
              </div>
            </div>
          </Fade>
        </MediaQuery>

        <MediaQuery minWidth={0} maxWidth={1000}>
          <h1>PRODUITS</h1>
          <Fade duration={3000}>
            <div
              className="container"
              id="produitDivMobile"
              onClick={handleShowCat}
            >
              <div className="container" id="productMobile">
                <p className="nameProductMobile">Love to earn</p>

                <img className="animalPicMobile" src={"./chat.png"} />
              </div>
              <div>
                <p className="descriptionMobile">
                  Recevez des récompenses en token ANTK lorsque vous passez du
                  temps avec votre animal.
                </p>
              </div>
            </div>

            <div
              className="container"
              id="produitDivMobile"
              onClick={handleShowDog}
            >
              <div className="container" id="product">
                <p className="nameProductMobile">Find to earn</p>
                <img className="animalPicMobile" src={"./chien.png"} />
              </div>
              <div>
                <p className="descriptionMobile">
                  Recevez des récompenses en token ANTK lorsque vous aidez à
                  retrouver un animal perdu.
                </p>
              </div>
            </div>

            <div
              className="container"
              id="produitDivMobile"
              onClick={handleShowBird}
            >
              <div className="container" id="product">
                <p className="nameProductMobile">Keep to earn</p>
                <img className="animalPicMobile" src={"./oiseau.png"} />
              </div>
              <div>
                <p className="descriptionMobile">
                  Recevez des photos de votre animal lorsque vous partez en
                  vacances sans lui et faites gagner des tokens à la personne
                  qui s'occupe de votre animal.
                </p>
              </div>
            </div>

            <div
              className="container"
              id="produitDivMobile"
              onClick={handleShowTigre}
            >
              <div className="container" id="product">
                <p className="nameProductMobile">Play to earn</p>
                <img className="animalPicMobile" src={"./tigre.png"} />
              </div>
              <div>
                <p className="descriptionMobile">
                  Un univers de jeux qui vont utiliser la reconnaissance faciale
                  animale pour découvrir le monde des animaux et vous faire
                  gagner des tokens.
                </p>
              </div>
            </div>
          </Fade>
        </MediaQuery>
      </div>

      {/* <Modal
        show={showCat}
        onHide={handleCloseCat}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="custom-modal-style"
      >
        <Modal.Header closeButton>
          <Modal.Title className="nameProductMobile">Love To Earn</Modal.Title>
        </Modal.Header>
        <Modal.Body className="descriptionMobile">
          <div className="modalDesc">
            Le passeport unique de votre animal va être créé grâce à la
            reconnaissance animale de AnimalNationTK. <br />
            Passez du temps avec votre animal et identifiez le régulièrement
            avec l’application pour conserver le niveau d'énergie du passeport.
            <img className="animalPicMobile" src={"./chat.png"}></img>
            <br />
            Chaque semaine vous recevrez des tokens ANTK en récompense de votre
            grande amitié avec votre animal.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCat}>
            x
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDog}
        onHide={handleCloseDog}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="nameProductMobile">Find To Earn</Modal.Title>
        </Modal.Header>
        <Modal.Body className="descriptionMobile">
          <div className="modalDesc">
            Cette fonction alerte les utilisateurs de l'application qu'un animal
            a été perdu dans la zone géographique où ils se trouvent. Une
            personne qui rencontrera un animal perdu pourra réaliser une
            identification avec la reconnaissance faciale animale et prévenir le
            propriétaire de la présence de son animal.
            <br />
            <img className="animalPicMobile" src={"./chien.png"}></img>
            <br />
            Apres validation, une récompense en ANTK sera envoyée directement à
            la personne qui a trouvé votre animal.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDog}>
            x
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showBird}
        onHide={handleCloseBird}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="nameProductMobile">Keep To Earn</Modal.Title>
        </Modal.Header>
        <Modal.Body className="descriptionMobile">
          <div className="modalDesc">
            Cette fonction alerte les utilisateurs de l'application qu'un animal
            a été perdu dans la zone géographique où ils se trouvent. Une
            personne qui rencontrera un animal perdu pourra réaliser une
            identification avec la reconnaissance faciale animale et prévenir le
            propriétaire de la présence de son animal.
            <img className="animalPicMobile" src={"./oiseau.png"}></img>
            <br />
            Apres validation, une récompense en ANTK sera envoyée directement à
            la personne qui a trouvé votre animal.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBird}>
            x
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showTigre}
        onHide={handleCloseTigre}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="nameProductMobile">Play To Earn</Modal.Title>
        </Modal.Header>
        <Modal.Body className="descriptionMobile">
          <div className="modalDesc">
            Les jeux et des tournois vous feront réaliser des safaris photos où
            vont se mêler le réel avec la reconnaissance animale et des animaux
            en réalité augmentée.
            <br />
            <img className="animalPicMobile" src={"./playtoearn.png"}></img>
            <br />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTigre}>
            x
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* // ----- Roadmap */}
      <div id="roadmap">
        <h1 id="roadmaptitle">ROADMAP</h1>
        <Fade duration={3000}>
          <div className="container" id="roadmapDiv">
            <img src={"./roadmap-fr.png"} id="roadmapPic" />
          </div>
        </Fade>
      </div>

      {/* // ------ Tokenomis  */}

      <div id="tokenomics">
        <h1>TOKENOMICS</h1>
        <Fade duration={3000}>
          <div className="container" id="tokenomicsDiv">
            <img src={"./tokenomicsdet.png"} id="diagrammePic" />
          </div>
        </Fade>
      </div>

      {/* // ----- team */}
      <div id="team">
        <h1>ÉQUIPE</h1>
        <Fade duration={5000}>
          <div className="container" id="profileDiv">
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/basileclinet/"
                target="_blank"
              >
                <img className="profilePic" src={"./basile1.jpg"} />
              </a>
              <p className="name">Basile</p>
              <p className="legend">Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/glarochette/"
                target="_blank"
              >
                <img className="profilePic" src={"./guillaume1.jpg"} />
              </a>
              <p className="name">Guillaume</p>
              <p className="legend">Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/jeason-bacoul-742510225/"
                target="_blank"
              >
                <img className="profilePic" src={"./jeasonV1.jpg"} />
              </a>
              <p className="name">Jeason</p>
              <p className="legend">Lead Community Manager</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/cbtna/?_l=fr_FR"
                target="_blank"
              >
                <img className="profilePic" src={"./charlotte1.jpg"} />
              </a>
              <p className="name">Charlotte</p>
              <p className="legend">Graphiste</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./amaury1.jpg"} />
              </a>
              <p className="name">Amaury</p>
              <p className="legend">Développeur</p>
            </div>
            <div className="profileCard">
              <a href="/" target="_blank">
                <img className="profilePic" src={"./LOGO.png"} />
              </a>
              <p className="name">Jean-Baptiste</p>
              <p className="legend">Développeur Blockchain</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/gilles-a-7b220a23a"
                target="_blank"
              >
                <img className="profilePic" src={"./gilles.jpg"} />
              </a>
              <p className="name">Gilles</p>
              <p className="legend">Co-Fondateur</p>
            </div>
            {/* <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./LOGO.jpg"} />
              </a>
              <p className="name">XXX</p>
              <p className="legend">Xxxxx</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./LOGO.jpg"} />
              </a>
              <p className="name">Gilles</p>
              <p className="legend">Xxxxx</p>
            </div> */}
          </div>
        </Fade>
      </div>
      {/* // ----- Newsletter  */}
      {/* <div id="newsDiv">
        <h1>NEWSLETTER</h1>
      <Iframe url="https://form.jotform.com/222491824586363"
        width="90%"
        height="300px"
        id="myId"
        className="newsletter"
        display="initial"
        position="relative"/>
      </div> */}
      <Footer />
    </div>
  );
}
