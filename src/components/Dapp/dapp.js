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

function Dapp() {
  const [currentState, newState] = useState([]);
  const [whitelisted, iswhitelisted] = useState([]);
  const [devise, setDevise] = useState('');


  return (
    <EthProvider>
      <div>
        <Header />
        <h1>Vente Privée ANTK</h1>
        <NetWork />
        <SalesStatus newState={newState} />
        <Whitelist iswhitelisted={iswhitelisted} whitelisted={whitelisted} />
        <Devise currentState={currentState} whitelisted={whitelisted} setDevise={setDevise} devise={devise} />
        <Buy currentState={currentState} whitelisted={whitelisted} devise={devise} />
        <Amounts />
        <Account />
      </div>
    </EthProvider>
  )
}


export default Dapp;