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

function Dapp() {
  const [currentState, newState] = useState([]);
  const [whitelisted, iswhitelisted] = useState([]);
  const [devise, setDevise] = useState("");

  return (
    <div className="App">
      <Navbar />
      <EthProvider>
        <div>
          <div className="top">
          <h1>Vente Privée ANTK
          <NetWork />
          </h1>
          
          <Header />
          </div>
          <SalesStatus newState={newState} />
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
          />
          <Amounts />
          <Account />
          <Footer />
        </div>
      </EthProvider>
    </div>
  );
}

export default Dapp;
