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
import Navbar from "./newNav";

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

  const [showCatMobile, setShowCatMobile] = useState(false);
  const handleCloseCatMobile = () => setShowCatMobile(false);
  const handleShowCatMobile = () => setShowCatMobile(true);

  const [showDogMobile, setShowDogMobile] = useState(false);
  const handleCloseDogMobile = () => setShowDogMobile(false);
  const handleShowDogMobile = () => setShowDogMobile(true);

  const [showBirdMobile, setShowBirdMobile] = useState(false);
  const handleCloseBirdMobile = () => setShowBirdMobile(false);
  const handleShowBirdMobile = () => setShowBirdMobile(true);

  const [showTigreMobile, setShowTigreMobile] = useState(false);
  const handleCloseTigreMobile = () => setShowTigreMobile(false);
  const handleShowTigreMobile = () => setShowTigreMobile(true);

  return (
    <div className="App">
      <MediaQuery minWidth={1000}>
      <div className="headerNew">
        {/* <div id="langButton"> 
          <MediaQuery minWidth={1000}>
            <Link to="/">
              <button className="lang">FR</button>
            </Link>
            <Link to="/eng">
              <button className="lang">EN</button>
            </Link>
          </MediaQuery>
          <MediaQuery minWidth={0} maxWidth={1000}>
            <Link to="/">
              <button className="langMobile">FR</button>
            </Link>
            <Link to="/eng">
              <button className="langMobile">EN</button>
            </Link>
          </MediaQuery>
        </div> */}
        <div id="navcontainer">
          {/* <Nav /> */}
          <Navbar/>
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
                style={{ height: 80, width: 80 }}
                bgColor="white"
              />
              <SocialIcon
                url="https://linktr.ee/animalnationtk"
                className="socialicon"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="white"
              />
              <SocialIcon
                url="https://t.me/ANTKofficialchannel"
                className="socialicon2"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="white"
              />
            </div>
          </div>
        </div>
      </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
      <div className="headerNewMobile">
        {/* <div id="langButton"> 
          <MediaQuery minWidth={1000}>
            <Link to="/">
              <button className="lang">FR</button>
            </Link>
            <Link to="/eng">
              <button className="lang">EN</button>
            </Link>
          </MediaQuery>
          <MediaQuery minWidth={0} maxWidth={1000}>
            <Link to="/">
              <button className="langMobile">FR</button>
            </Link>
            <Link to="/eng">
              <button className="langMobile">EN</button>
            </Link>
          </MediaQuery>
        </div> */}
        <div id="navcontainer">
          {/* <Nav /> */}
          <Navbar/>
        </div>
        {/* // ------ banner */}
        <div id="bannerMobile">
          <div className="accroche">
            <Fadetitle />
            <div id="socials">
              <SocialIcon
                url="https://twitter.com/animalnationtk"
                className="socialicon"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="white"
              />
              <SocialIcon
                url="https://linktr.ee/animalnationtk"
                className="socialicon"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="white"
              />
              <SocialIcon
                url="https://t.me/ANTKofficialchannel"
                className="socialicon2"
                target="_blank"
                style={{ height: 80, width: 80 }}
                bgColor="white"
              />
            </div>
          </div>
        </div>
      </div>
      </MediaQuery>
      

      {/* // ---- compte a rebours  */}
      <div className="countDiv">
        <div className="container" id="count">
          <h2 className="date">23 Septembre 2022</h2>
          <h1 className="vente">VENTE PRIVÉE </h1>
          <Timer />
          <br />
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

          {/* <ReactCardSlider slides={slides}/> */}
        </div>
      </div>

      {/* // ----- About  */}

      <div id="about">
        <MediaQuery minWidth={1000}>
          <h1 id="roadmaptitle">L'APPLICATION ANIMAL NATION</h1>
          <Fade duration={1000}>
            <div className="container" id="aboutDiv">
              <div className="container" id="product">
                <img className="aboutPic" src={"./LOGO.png"} />

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
          <h1 id="roadmaptitle">L'APPLICATION ANIMAL NATION</h1>
          <Fade duration={1000}>
            <div className="container" id="produitDivMobile">
              <div className="container" id="productMobile">
                <img className="aboutPicMobile" src={"./LOGO.png"} />

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
          <h1 id="roadmaptitle">PRODUITS</h1>
          <Fade duration={3000}>
            {/* <Link to="/lovetoearnfr.pdf" style={{ color: 'inherit', textDecoration: 'inherit'}}> */}
            <Slide direction="left">
              <div
                className="container"
                id="produitDiv"
                onClick={handleShowCat}
              >
                <div id="product">
                  <p className="prodname">Love to earn</p>

                  <img className="animalPic" src={"./chat.png"} />
                </div>
                <div>
                  <p className="description">
                    Recevez des récompenses en token ANTK lorsque vous passez du
                    temps avec votre animal.
                  </p>
                  <br />
                  <a href="/love-fr">
                    <button onClick={handleShowCat} className="prodInfo">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
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
                <Modal.Title className="nameProductMobile">
                  Love To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  Le passeport unique de votre animal va être créé grâce à la
                  reconnaissance animale de AnimalNationTK. <br />
                  Passez du temps avec votre animal et identifiez le
                  régulièrement avec l’application pour conserver le niveau
                  d'énergie du passeport.
                  <img
                    className="animalPicMobile"
                    src={"./passeportchatfr.png"}
                  ></img>
                  <br />
                  Chaque semaine vous recevrez des tokens ANTK en récompense de
                  votre grande amitié avec votre animal.
                </div>
              </Modal.Body>
            </Modal> */}

            <Slide direction="left">
              <div
                className="container"
                id="produitDiv"
                onClick={handleShowBird}
              >
                <div id="product">
                  <p className="prodname">Find to earn</p>
                  <img className="animalPic" src={"./chien.png"} />
                </div>
                <div>
                  <p className="description">
                    Recevez des récompenses en token ANTK lorsque vous aidez à
                    retrouver un animal perdu.
                  </p>
                  <br />
                  <a href="/find-fr">
                    <button onClick={handleShowBird} className="prodInfo">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
            {/* <Modal
              show={showDog}
              onHide={handleCloseDog}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title className="nameProductMobile">
                  Find To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  Cette fonction alerte les utilisateurs de l'application qu'un
                  animal a été perdu dans la zone géographique où ils se
                  trouvent. Une personne qui rencontrera un animal perdu pourra
                  réaliser une identification avec la reconnaissance faciale
                  animale et prévenir le propriétaire de la présence de son
                  animal.
                  <br />
                  <img className="animalPicMobile" src={"./find.png"}></img>
                  <br />
                  Apres validation, une récompense en ANTK sera envoyée
                  directement à la personne qui a trouvé votre animal.
                </div>
              </Modal.Body>
            </Modal> */}

            <Slide direction="left">
              <div
                className="container"
                id="produitDiv"
                onClick={handleShowBird}
              >
                <div id="product">
                  <p className="prodname">Keep to earn</p>
                  <img className="animalPic" src={"./oiseau.png"} />
                </div>
                <div>
                  <p className="description">
                    Recevez des photos de votre animal lorsque vous partez en
                    vacances sans lui et faites gagner des tokens à la personne
                    qui s'occupe de votre animal.
                  </p>
                  <br />
                  <a href="/keep-fr">
                    <button onClick={handleShowBird} className="prodInfo">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
            {/* <Modal
              show={showBird}
              onHide={handleCloseBird}
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title className="nameProductMobile">
                  Keep To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  Le concept de Keep to earn permet de récompenser avec des
                  tokens ANTK, une personne qui garde votre animal pendant que
                  vous êtes absent et qui vous envoie régulièrement des photos
                  en utilisant l'application AnimalNationTK
                  <img className="animalPicMobile" src={"./accueil.png"}></img>
                </div>
              </Modal.Body>
            </Modal> */}

            <Slide direction="left">
              <div
                className="container"
                id="produitDiv"
                onClick={handleShowTigre}
              >
                <div id="product">
                  <p className="prodname">Play to earn</p>
                  <img className="animalPic" src={"./tigre.png"} />
                </div>
                <div>
                  <p className="description">
                    Un univers de jeux qui vont utiliser la reconnaissance
                    faciale animale pour découvrir le monde des animaux et vous
                    faire gagner des tokens.
                  </p>
                  <br />
                  <a href="/play-fr">
                    <button onClick={handleShowBird} className="prodInfo">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
            {/* <Modal
              show={showTigre}
              onHide={handleCloseTigre}
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title className="nameProductMobile">
                  Play To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  Les jeux et des tournois vous feront réaliser des safaris
                  photos où vont se mêler le réel avec la reconnaissance animale
                  et des animaux en réalité augmentée.
                  <br />
                  <img className="animalPicMobile" src={"./play.jpg"}></img>
                  <br />
                </div>
              </Modal.Body>
            </Modal> */}
          </Fade>
        </MediaQuery>

        <MediaQuery minWidth={0} maxWidth={1000}>
          <h1 id="roadmaptitle">PRODUITS</h1>
          <Fade duration={3000}>
            <Slide direction="left">
              <div className="container" id="produitDivMobile">
                <div id="productMobile">
                  <p className="nameProductMobile">Love to earn</p>

                  <img className="animalPicMobile" src={"./chat.png"} />
                </div>
                <div>
                  <p className="descriptionMobile">
                    Recevez des récompenses en token ANTK lorsque vous passez du
                    temps avec votre animal.
                  </p>
                  <br />
                  <a href="/love-fr">
                    <button onClick={handleShowBird} className="prodInfoMobile">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
            {/* <Modal
              show={showCatMobile}
              onHide={handleCloseCatMobile}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              contentClassName="modalMobile"
            >
              <Modal.Header closeButton>
                <Modal.Title className="nameProductMobile">
                  Love To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  Le passeport unique de votre animal va être créé grâce à la
                  reconnaissance animale de AnimalNationTK. <br />
                  Passez du temps avec votre animal et identifiez le
                  régulièrement avec l’application pour conserver le niveau
                  d'énergie du passeport.
                  <img
                    className="animalPicMobile"
                    src={"./passeportchatfr.png"}
                  ></img>
                  <br />
                  Chaque semaine vous recevrez des tokens ANTK en récompense de
                  votre grande amitié avec votre animal.
                </div>
              </Modal.Body>
            </Modal> */}
            <Slide direction="left">
              <div className="container" id="produitDivMobile">
                <div id="productMobile">
                  <p className="nameProductMobile">Find to earn</p>
                  <img className="animalPicMobile" src={"./chien.png"} />
                </div>
                <div>
                  <p className="descriptionMobile">
                    Recevez des récompenses en token ANTK lorsque vous aidez à
                    retrouver un animal perdu.
                  </p>
                  <br />
                  <a href="/find-fr">
                    <button onClick={handleShowBird} className="prodInfoMobile">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
            {/* <Modal
              show={showDogMobile}
              onHide={handleCloseDogMobile}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              contentClassName="modalMobile"
            >
              <Modal.Header closeButton>
                <Modal.Title className="nameProductMobile">
                  Find To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  Cette fonction alerte les utilisateurs de l'application qu'un
                  animal a été perdu dans la zone géographique où ils se
                  trouvent. Une personne qui rencontrera un animal perdu pourra
                  réaliser une identification avec la reconnaissance faciale
                  animale et prévenir le propriétaire de la présence de son
                  animal.
                  <br />
                  <img className="animalPicMobile" src={"./find.png"}></img>
                  <br />
                  Apres validation, une récompense en ANTK sera envoyée
                  directement à la personne qui a trouvé votre animal.
                </div>
              </Modal.Body>
            </Modal> */}
            <Slide direction="left">
              <div
                className="container"
                id="produitDivMobile"
                onClick={handleShowBirdMobile}
              >
                <div id="productMobile">
                  <p className="nameProductMobile">Keep to earn</p>
                  <img className="animalPicMobile" src={"./oiseau.png"} />
                </div>
                <div>
                  <p className="descriptionMobile">
                    Recevez des photos de votre animal lorsque vous partez en
                    vacances sans lui et faites gagner des tokens à la personne
                    qui s'occupe de votre animal.
                  </p>
                  <br />
                  <a href="/keep-fr">
                    <button onClick={handleShowBird} className="prodInfoMobile">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
            {/* <Modal
              show={showBirdMobile}
              onHide={handleCloseBirdMobile}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              contentClassName="modalMobile"
            >
              <Modal.Header closeButton>
                <Modal.Title className="nameProductMobile">
                  Keep To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  Le concept de Keep to earn permet de récompenser avec des
                  tokens ANTK, une personne qui garde votre animal pendant que
                  vous êtes absent et qui vous envoie régulièrement des photos
                  en utilisant l'application AnimalNationTK
                  <img className="animalPicMobile" src={"./accueil.png"}></img>
                </div>
              </Modal.Body>
            </Modal> */}
            <Slide direction="left">
              <div
                className="container"
                id="produitDivMobile"
                onClick={handleShowTigre}
              >
                <div id="productMobile">
                  <p className="nameProductMobile">Play to earn</p>
                  <img className="animalPicMobile" src={"./tigre.png"} />
                </div>
                <div>
                  <p className="descriptionMobile">
                    Un univers de jeux qui vont utiliser la reconnaissance
                    faciale animale pour découvrir le monde des animaux et vous
                    faire gagner des tokens.
                  </p>
                  <br />
                  <a href="/play-fr">
                    <button onClick={handleShowBird} className="prodInfoMobile">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
            {/* <Modal
              show={showTigreMobile}
              onHide={handleCloseTigreMobile}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              contentClassName="modalMobile"
            >
              <Modal.Header closeButton>
                <Modal.Title className="nameProductMobile">
                  Play To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  Les jeux et des tournois vous feront réaliser des safaris
                  photos où vont se mêler le réel avec la reconnaissance animale
                  et des animaux en réalité augmentée.
                  <br />
                  <img className="animalPicMobile" src={"./play.jpg"}></img>
                  <br />
                </div>
              </Modal.Body>
            </Modal> */}
          </Fade>
        </MediaQuery>
      </div>

      {/* // ----- Roadmap */}
      <div id="roadmap">
        <h1 id="roadmaptitle">ROADMAP</h1>
        <Fade duration={3000}>
          <div className="container" id="roadmapDiv">
            <Slide direction="left">
              <MediaQuery minWidth={1000}>
                <img src={"./roadmapfr.png"} id="roadmapPic" />
              </MediaQuery>
              <MediaQuery minWidth={0} maxWidth={1000}>
                <img src={"./roadmapfr.png"} id="roadmapPicMobile" />
              </MediaQuery>
            </Slide>
            <MediaQuery minWidth={1000}>
              <div>
                <a
                  href="/roadmap-fr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttonSales">ROADMAP</button>
                </a>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div>
                <a
                  href="/roadmap-fr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="buttonSalesMobile">ROADMAP</button>
                </a>
                <br />
              </div>
            </MediaQuery>
          </div>
        </Fade>
      </div>

      {/* // ------ Tokenomis  */}

      <div id="tokenomics">
        <h1>TOKENOMICS</h1>
        <Fade duration={3000}>
          <Slide direction="left">
            <div className="container" id="tokenomicsDiv">
              <img src={"./tokenfr.png"} id="diagrammePic" />
            </div>
          </Slide>
        </Fade>
      </div>

      {/* // ----- team */}
      <div id="team">
        <h1 id="roadmaptitle">ÉQUIPE</h1>
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
              <img className="profilePic" src={"./LOGO.png"} />

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
            <div className="profileCard">
              <img className="profilePic" src={"./LOGO.png"} />

              <p className="name">Marina</p>
              <p className="legend">Développeuse / Co-Fondatrice</p>
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
