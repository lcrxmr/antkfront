import { EthProvider } from "../../contexts/EthContext";
import NetWork from "./NetworkEN";
import { useState } from "react";
import SalesStatus from "./SalesStatusEN";
import Header from "./HeaderEN";
import Devise from "./DeviseEN";
import Whitelist from "./Whitelist";
import Buy from "./BuyEN";
import Amounts from "./AmountsEN";
import Account from "./AccountEN";
import FooterEN from "../enFooter";
import "./dapp.css";
import Calcul from "./CalculetteEN";
import MediaQuery from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../newNav.css";
import { Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";
import VersionFR from "./VersionFR";
import PriceSolo from "./PriceSolo"

function Dapp() {
  const [currentState, newState] = useState("");
  const [whitelisted, iswhitelisted] = useState([]);
  const [devise, setDevise] = useState("");
  const [tokensRemaining, setTokensRemaining] = useState();
  const [priceOfEth, setPriceEth] = useState();
  const [boolAcc, setboolAcc] = useState();
  const USDT ="0x4Aec1F50164e9B09EcD966495993a47fb0B80467";
  const Private = "0xE130E93b386B7FA49163713160C7353E854b51c9";

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
               ANTK Private Sale
              <NetWork />
            </h1>
          </div>

          <SalesStatus
            newState={newState}
            whitelisted={whitelisted}
            currentState={currentState}
          />
          <Whitelist iswhitelisted={iswhitelisted} whitelisted={whitelisted} />


          <div className="headerDiv">
          <a href='https://discord.com/channels/1014479004956377198/1014865360123609119'>
          <div className="telegram" > Live Telegram </div>
          </a>
          

              <Header
                setPriceEth={setPriceEth}
                priceOfEth={priceOfEth}
                setboolAcc={setboolAcc}
                USDT={USDT}
              />
              <div className="priceSolo" >
              <PriceSolo/>
              </div>
              {boolAcc == true && <Account />}
              
            </div>


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
              ANTK PRIVATE SALE
            </h1>
            <NetWork />
            <div className="headerDivMobile">
          <a href='https://discord.com/channels/1014479004956377198/1014865360123609119'>
          <div className="telegramMobile" > Live Telegram </div>
          </a>
              <Header
                setPriceEth={setPriceEth}
                priceOfEth={priceOfEth}
                setboolAcc={setboolAcc}
              />
              <PriceSolo/>
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

      <FooterEN />
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
