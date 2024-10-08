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
import FooterEN from "../Footer/enFooter";
import "./dapp.css";
import Calcul from "./CalculetteEN";
import MediaQuery from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navbar/newNav.css";
import { useRef } from "react";
import VersionFR from "./VersionFR";
import PriceSolo from "./PriceSolo"

function Dapp() {
  const [currentState, newState] = useState("");
  const [whitelisted, iswhitelisted] = useState();
  const [proof, setProof] = useState();
  const [devise, setDevise] = useState("");
  const [tokensRemaining, setTokensRemaining] = useState();
  const [priceOfEth, setPriceEth] = useState();
  const [boolAcc, setboolAcc] = useState();
  const USDT ="0xdAC17F958D2ee523a2206206994597C13D831ec7";
  const Private = "0x9bD1873F51e589D1c62112e886e79F0d8d9FC804";
  const [myBool2, setMyBool2] = useState();

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
      <div className="headerNew">
      
      <header className='active' >
      <MediaQuery minWidth={1000}>
        <img
          alt=""
          src={"./logo-white.png"}
          // className="d-inline-block align-top"
          id="navlogo"
        />
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
        <img
          alt=""
          src={"./logo-white.png"}
          // className="d-inline-block align-top"
          id="navlogoMobile"
        />
      </MediaQuery>
        <nav ref={navRef} style={{color: "black"}}>
        <a href="/" onClick={hideNavbar}>
            Home
          </a>
          <a href="/white-fr.pdf" target="_blank" onClick={hideNavbar}>
            Whitepaper
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes size={70} />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars size={70} />
        </button>
      </header>
      </div>

      <MediaQuery minWidth={1000}>
        <EthProvider>
          <div className="top">
            <h1 className="titreDapp">
               ANTK Private Sale
              <NetWork />
            </h1>
          </div>

          <SalesStatus
          myBool2={myBool2}
            newState={newState}
            whitelisted={whitelisted}
            currentState={currentState}
          />
          <Whitelist setProof={setProof} proof={proof}  setMyBool2={setMyBool2} myBool2={myBool2}/>

 
          <div className="headerDiv">
          <a href='https://t.me/+-DyD7hKACyk3YTE8' target="_blank">
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
              myBool2={myBool2}
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
                myBool2={myBool2}
              />
              <Calcul
              myBool2={myBool2}
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
          <a href='https://t.me/+-DyD7hKACyk3YTE8'>
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
          myBool2={myBool2}
            newState={newState}
            whitelisted={whitelisted}
            currentState={currentState}
          />
          <Whitelist setProof={setProof} proof={proof}  setMyBool2={setMyBool2} myBool2={myBool2}/>

          {/* //------------- BUY ANTK  */}
          <MediaQuery minWidth={1000}>
            <div className="buyANTK">
              <img className="tokenPic" src={"./token.png"} />

              <div className="buyDiv">
                <Devise
                myBool2={myBool2}
                  currentState={currentState}
                  whitelisted={whitelisted}
                  setDevise={setDevise}
                  devise={devise}
                />
                <Buy
                myBool2={myBool2}
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
                myBool2={myBool2}
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
                  myBool2={myBool2}
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
