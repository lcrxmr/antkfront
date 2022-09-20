import { EthProvider } from "../../contexts/EthContext";
import NetWork from "./Network";
import { useState, useEffect } from "react";
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
import VersionEN from "./VersionEN";

function Dapp() {
  const [currentState, newState] = useState("");
  const [whitelisted, iswhitelisted] = useState([]);
  const [devise, setDevise] = useState("");
  const [tokensRemaining, setTokensRemaining] = useState();
  const [priceOfEth, setPriceEth] = useState();
  const [boolAcc, setboolAcc] = useState();

  const français = <VersionFR />;
  const english = <VersionEN />;
  const [langue, setLangue] = useState(français);

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
        <div className="buyLang">
          <MediaQuery minWidth={1000}>
            <h5 className="buyLangButton" onClick={() => setLangue(français)}>
              fr
            </h5>
            <h5>{""} |{""}</h5>
            <h5 className="buyLangButton" onClick={() => setLangue(english)}>
              en
            </h5>
          </MediaQuery>
        </div>
        <div id="langButtonMobile">
          <MediaQuery minWidth={0} maxWidth={1000}>
          <h5 className="buyLangButton" onClick={() => setLangue(français)}>
              fr
            </h5>
            <h5>{""} |{""}</h5>
            <h5 className="buyLangButton" onClick={() => setLangue(english)}>
              en
            </h5>
          </MediaQuery>
        </div>
        {langue}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Vous n'avez pas installé l'extension MetaMask !</h2>
        <p>
          Rendez vous ici pour l'obtenir :{" "}
          <a href="https://metamask.io/">https://metamask.io/</a>
        </p>
      </div>
    );
  }
}

export default Dapp;
