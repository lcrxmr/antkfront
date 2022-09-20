import { EthProvider } from "../../contexts/EthContext";
import NetWork from "./Network";
import { useState } from "react";
import SalesStatus from "./SalesStatus";
import Header from "./Header";
import Devise from "./Devise";
import Whitelist from "./Whitelist";
import Buy from "./Buy";
import Amounts from "./Amounts";
import Account from "./Account";
import Footer from "../Footer";
import "./dapp.css";
import Calcul from "./Calculette";
import MediaQuery from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../newNav.css";
import { Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";
import VersionFR from "./VersionFR";

function Dapp() {
  const [currentState, newState] = useState("");
  const [whitelisted, iswhitelisted] = useState([]);
  const [devise, setDevise] = useState("");
  const [tokensRemaining, setTokensRemaining] = useState();
  const [priceOfEth, setPriceEth] = useState();
  const [boolAcc, setboolAcc] = useState();
  const USDT ="0x4Aec1F50164e9B09EcD966495993a47fb0B80467";
  const Private = "0x4b7F3cBb44eafAF421151592605eF875277410b8";

  const français = <VersionFR/>

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  if (window.ethereum) {
  return (
    <div className="App">
          <header>
        <img
          alt=""
          src={"./antk_police.png"}
          width={120}
          height={120}
          className="d-inline-block align-top"
          id="navlogo"
        />
        <nav ref={navRef}>
        <a href="/" target="_blank" onClick={hideNavbar}>
            Home
          </a>
          <a href="/white-fr.pdf" target="_blank" onClick={hideNavbar}>
            Whitepaper
          </a>
          <a href="/private" onClick={hideNavbar}>
            Contact
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes size={70} />
          </button>
          {/* <div id="langButton">
            <MediaQuery minWidth={1000}>
              <button className="lang">FR</button>
              <button className="lang">EN</button>
            </MediaQuery>
          </div>
          <div id="langButtonMobile">
            <MediaQuery minWidth={0} maxWidth={1000}>
              <button className="langMobile">FR</button>

              <button className="langMobile">EN</button>
            </MediaQuery>
          </div> */}
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars size={70} />
        </button>
      </header>

      <MediaQuery minWidth={1000}>
        <EthProvider>
          <div className="top">
            <h1 className="titreDapp">
              Vente Privée ANTK
              <NetWork />
            </h1>

            <div className="headerDiv">
              <Header
                setPriceEth={setPriceEth}
                priceOfEth={priceOfEth}
                setboolAcc={setboolAcc}
                USDT={USDT}
              />
              {boolAcc == true && <Account />}
            </div>
          </div>
          <SalesStatus
            newState={newState}
            whitelisted={whitelisted}
            currentState={currentState}
          />
          <Whitelist iswhitelisted={iswhitelisted} whitelisted={whitelisted} />
          
          <div className="buyANTK">
            <img className="tokenPic" src={"./token.png"} />

            <div className="buyDiv">
              <Devise
                currentState={currentState}
                whitelisted={whitelisted}
                setDevise={setDevise}
                devise={devise}
              />
              <Buy
                currentState={currentState}
                whitelisted={whitelisted}
                devise={devise}
                priceOfEth={priceOfEth}
                setboolAcc={setboolAcc}
                USDT={USDT}
                Private={Private}
              />
              <Calcul
                tokensRemaining={tokensRemaining}
                devise={devise}
                priceOfEth={priceOfEth}
                whitelisted={whitelisted}
                currentState={currentState}
              />
            </div>
          </div>

          <div className="mid">
            <div className="amounts">
              <Amounts
                tokensRemaining={tokensRemaining}
                setTokensRemaining={setTokensRemaining}
              />
              
            </div>
          </div>
        </EthProvider>
      </MediaQuery>
      
      <MediaQuery minWidth={0} maxWidth={1000}>
        <EthProvider>
          <div className="topMobile">
            <h1 className="titreDappMobile">
              Vente Privée ANTK
            </h1>
            <NetWork />

            <div className="headerDivMobile">
              <Header
                setPriceEth={setPriceEth}
                priceOfEth={priceOfEth}
                setboolAcc={setboolAcc}
              />
              {boolAcc == true && <Account />}
            </div>
          </div>
          <SalesStatus
            newState={newState}
            whitelisted={whitelisted}
            currentState={currentState}
          />
          <Whitelist iswhitelisted={iswhitelisted} whitelisted={whitelisted} />

          {/* //------------- BUY ANTK  */}
          <MediaQuery minWidth={1000}>
            <div className="buyANTK">
              <img className="tokenPic" src={"./token.png"} />

              <div className="buyDiv">
                <Devise
                  currentState={currentState}
                  whitelisted={whitelisted}
                  setDevise={setDevise}
                  devise={devise}
                />
                <Buy
                  currentState={currentState}
                  whitelisted={whitelisted}
                  devise={devise}
                  priceOfEth={priceOfEth}
                  setboolAcc={setboolAcc}
                />
                <Calcul
                  tokensRemaining={tokensRemaining}
                  devise={devise}
                  priceOfEth={priceOfEth}
                  whitelisted={whitelisted}
                  currentState={currentState}
                />
              </div>
              <Account/>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={0} maxWidth={1000}>
            <div className="buyANTKMobile">
              <img className="tokenPicMobile" src={"./token.png"} />

              <div className="buyDiv">
                <Devise
                  currentState={currentState}
                  whitelisted={whitelisted}
                  setDevise={setDevise}
                  devise={devise}
                />
                <Buy
                  currentState={currentState}
                  whitelisted={whitelisted}
                  devise={devise}
                  priceOfEth={priceOfEth}
                  setboolAcc={setboolAcc}
                />
                <Calcul
                  tokensRemaining={tokensRemaining}
                  devise={devise}
                  priceOfEth={priceOfEth}
                  whitelisted={whitelisted}
                  currentState={currentState}
                />
              </div>
            </div>
          </MediaQuery>

          {/* // --------------- Amounts  */}
          <MediaQuery minWidth={1000}>
            <div className="mid">
              <div className="amounts">
                <Amounts
                  tokensRemaining={tokensRemaining}
                  setTokensRemaining={setTokensRemaining}
                />
                
              </div>
            </div>
          </MediaQuery>
          <MediaQuery minWidth={0} maxWidth={1000}>
            <div className="mid">
              <div className="amountsMobile">
                <Amounts
                  tokensRemaining={tokensRemaining}
                  setTokensRemaining={setTokensRemaining}
                />
              </div>
            </div>
          </MediaQuery>
        </EthProvider>
      </MediaQuery>

      <Footer />
    </div>
  );
}

else{
  return (
    <div>
      <h2>Vous n'avez pas installé l'extension MetaMask !</h2>
      <p>Rendez vous ici pour l'obtenir : <a href="https://metamask.io/">https://metamask.io/</a></p>
      </div>
  );
}}

export default Dapp;
