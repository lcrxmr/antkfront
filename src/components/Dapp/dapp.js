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
import Navbar from "../../newNav";
import "./dapp.css";
import Calcul from "./Calculette";

function Dapp() {
  const [currentState, newState] = useState("");
  const [whitelisted, iswhitelisted] = useState([]);
  const [devise, setDevise] = useState("");
  const [tokensRemaining, setTokensRemaining] = useState();
  const [priceOfEth, setPriceEth] = useState();
  const [boolAcc, setboolAcc] = useState();

  return (
    <div className="App">
      <Navbar />
      <EthProvider>
        <div>
          <div className="top">
            <h1 className="titreDapp">Vente Privée ANTK
              <NetWork />
            </h1>
            
            <div className="headerDiv">
            <Header setPriceEth={setPriceEth} priceOfEth={priceOfEth} setboolAcc={setboolAcc} />
            </div>
            
          </div>
          <SalesStatus newState={newState} whitelisted={whitelisted} currentState={currentState} />
          <Whitelist iswhitelisted={iswhitelisted} whitelisted={whitelisted} />
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
          <Amounts tokensRemaining={tokensRemaining} setTokensRemaining={setTokensRemaining} />
          {boolAcc == true && <Account />}
          <Calcul 
          tokensRemaining={tokensRemaining} 
          devise={devise} 
          priceOfEth={priceOfEth} 
          whitelisted={whitelisted} 
          currentState={currentState} />
          <Footer />
        </div>
      </EthProvider>
    </div>
  );
}

export default Dapp;
