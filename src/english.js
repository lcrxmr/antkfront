import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import Timer from "./components/Countdown/enTimer";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/englishNavbar";
import { Fade } from "react-awesome-reveal";
import Iframe from "react-iframe";
import ReactCardSlider from "react-card-slider-component";
import { Routes, Route, Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import MediaQuery from "react-responsive";
import Modal from "react-bootstrap/Modal";
import { Slide } from "react-awesome-reveal";
import { CDBNavbar } from "cdbreact";

import Fadetitle from "./components/enFade";
import Footer from "./components/enFooter";

import "./styles.css";

export default function English(props) {
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
      <div className="headerNew">
        <div id="langButton">
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
        </div>

        <div className="container" id="navcontainer">
          <Nav />
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
      </div>

      {/* // ---- compte a rebours  */}
      <div className="countDiv">
        <div className="container" id="count">
          <h2 className="date">September 23rd 2022</h2>
          <h1 className="vente">PRIVATE SALE</h1>
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

      <div id="about">
        <MediaQuery minWidth={1000}>
          <h1 id="roadmaptitle">THE ANIMAL NATION APP</h1>
          <Fade duration={3000}>
            <div className="container" id="aboutDiv">
              <div className="container" id="product">
                <img className="aboutPic" src={"./LOGO.png"} />

                <p className="name">Animal Nation Token</p>
              </div>
              <div>
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
          <h1 id="roadmaptitle">THE ANIMAL NATION APP</h1>
          <Fade duration={1000}>
            <div className="container" id="produitDivMobile">
              <div className="container" id="productMobile">
                <img className="aboutPicMobile" src={"./LOGO.png"} />

                <p className="nameProductMobile">Animal Nation Token</p>
              </div>
              <div>
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

      {/* // ------ produit */}
      <div id="produit">
        <MediaQuery minWidth={1000}>
          <h1 id="roadmaptitle">PRODUITS</h1>
          <Fade duration={3000}>
            <Slide direction="left">
              <div
                className="container"
                id="produitDiv"
                onClick={handleShowCat}
              >
                <div className="container">
                  <p className="prodname">Love to earn</p>

                  <img className="animalPic" src={"./chat.png"} />
                </div>
                <div>
                  <p className="description">
                    Receive ANTK token rewards when you spend time with your
                    pet.
                  </p>
                  <br />
                  <a href="/love-en">
                    <button onClick={handleShowBird} className="prodInfo">
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
                  The unique passport of your pet will be created thanks to the
                  animal recognition of AnimalNationTK. Spend time with your pet
                  and identify it regularly with the app to keep the energy
                  level of the passport.
                  <img
                    className="animalPicMobile"
                    src={"./passeportchatfr.png"}
                  ></img>
                  <br />
                  Every week you will receive ANTK tokens as a reward for your
                  great friendship with your pet.
                </div>
              </Modal.Body>
            </Modal> */}

            <Slide direction="left">
              <div
                className="container"
                id="produitDiv"
                onClick={handleShowDog}
              >
                <div className="container" id="product">

                <p className="prodname">Find to earn</p>
                  <img className="animalPic" src={"./chien.png"} />

                </div>
                <div>
                  <p className="description">
                    Receive ANTK token rewards when you help find a lost animal.
                  </p>
                  <br />
                  <a href="/find-en">
                    <button onClick={handleShowBird} className="prodInfo">
                      Info
                    </button>
                  </a>
                </div>
              </div>
            </Slide>
            {/* <Modal show={showDog} onHide={handleCloseDog} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton>
                <Modal.Title className="nameProductMobile">
                  Find To Earn
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="descriptionMobile">
                <div className="modalDesc">
                  This feature alerts app users that an animal has been lost in
                  the geographic area where they are located. A person who
                  encounters a lost animal will be able to perform an
                  identification with animal facial recognition and warn the
                  owner of the presence of his animal.
                  <br />
                  <img className="animalPicMobile" src={"./find.png"}></img>
                  <br />
                  After validation, an ANTK reward will be sent directly to the
                  person who found your animal.
                </div>
              </Modal.Body>
            </Modal> */}
            <Slide direction="left">
              <div
                className="container"
                id="produitDiv"
                onClick={handleShowBird}
              >
                <div className="container" id="product">
                  <p className="prodname">Keep to earn</p>
                  <img className="animalPic" src={"./oiseau.png"} />
                </div>
                <div>
                  <p className="description">
                    Get photos of your pet when you go on vacation without it
                    and earn tokens for the person who looks after your pet.
                  </p>
                  <br />
                  <a href="/keep-en">
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
                  The concept of Keep to earn rewards with ANTK tokens, a person
                  who keeps your animal while you are away and regularly sends
                  photographs using AnimalNationTK
                  <img className="animalPicMobile" src={"./accueil.png"}></img>
                  <br />
                </div>
              </Modal.Body>
            </Modal> */}
            <Slide direction="left">
              <div
                className="container"
                id="produitDiv"
                onClick={handleShowTigre}
              >
                <div className="container" id="product">
                <p className="prodname">Play to earn</p>
                  <img className="animalPic" src={"./tigre.png"} />

                  
                </div>
                <div>
                  <p className="description">
                    A universe of games that will use animal facial recognition
                    to discover the world of animals and make you win tokens.
                  </p>
                  <br />
                  <a href="/play-en">
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
                  The games and tournaments will give you photographs of how to
                  combine the real with animal recognition and actually
                  increased animals.
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
                  <a href="/love-en">
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
                  The unique passport of your pet will be created thanks to the
                  animal recognition of AnimalNationTK. Spend time with your pet
                  and identify it regularly with the app to keep the energy
                  level of the passport.
                  <img
                    className="animalPicMobile"
                    src={"./passeportchatfr.png"}
                  ></img>
                  <br />
                  Every week you will receive ANTK tokens as a reward for your
                  great friendship with your pet.
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
                  <a href="/find-en">
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
                  This feature alerts app users that an animal has been lost in
                  the geographic area where they are located. A person who
                  encounters a lost animal will be able to perform an
                  identification with animal facial recognition and warn the
                  owner of the presence of his animal.
                  <br />
                  <img className="animalPicMobile" src={"./find.png"}></img>
                  <br />
                  After validation, an ANTK reward will be sent directly to the
                  person who found your animal.
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
                  <a href="/keep-en">
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
                  The concept of Keep to earn rewards with ANTK tokens, a person
                  who keeps your animal while you are away and regularly sends
                  photographs using AnimalNationTK
                  <img className="animalPicMobile" src={"./accueil.png"}></img>
                  <br />
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
                  <a href="/play-en">
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
                  The games and tournaments will give you photographs of how to
                  combine the real with animal recognition and actually
                  increased animals.
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
                <img src={"./roadmapeng.png"} id="roadmapPic" />
              </MediaQuery>
              <MediaQuery minWidth={0} maxWidth={1000}>
                <img src={"./roadmapeng.png"} id="roadmapPicMobile" />
              </MediaQuery>
            </Slide>
            <MediaQuery minWidth={1000}>
              <div>
                <a
                  href="/roadmap-eng.pdf"
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
                  href="/roadmap-eng.pdf"
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
          <div className="container" id="tokenomicsDiv">
            <Slide direction="left">
              <img src={"./tokeneng.png"} id="diagrammePic" />
            </Slide>
          </div>
        </Fade>
      </div>

      {/* // ----- team */}

      <div id="team">
        <h1 id="roadmaptitle">TEAM</h1>
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
              <p className="legend">Graphist</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
                target="_blank"
              >
                <img className="profilePic" src={"./amaury1.jpg"} />
              </a>
              <p className="name">Amaury</p>
              <p className="legend">Developer</p>
            </div>
            <div className="profileCard">
              <img className="profilePic" src={"./LOGO.png"} />

              <p className="name">Jean-Baptiste</p>
              <p className="legend">Blockchain Developer</p>
            </div>
            <div className="profileCard">
              <a
                href="https://www.linkedin.com/in/gilles-a-7b220a23a"
                target="_blank"
              >
                <img className="profilePic" src={"./gilles.jpg"} />
              </a>
              <p className="name">Gilles</p>
              <p className="legend">Co-Founder</p>
            </div>
            <div className="profileCard">
              <img className="profilePic" src={"./LOGO.png"} />

              <p className="name">Marina</p>
              <p className="legend">Developer / Co-Founder</p>
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
