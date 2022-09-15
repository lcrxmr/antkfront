import { EthProvider } from "../../contexts/EthContext";
import NetWork from "./Network";
import { useState } from "react";
import SalesStatus from "./SalesStatus";
import Header from "./Header";
import Devise from "./Devise";
import Whitelist from "./Whitelist";

function Dapp (){
  const [currentState, newState] = useState([]);
  const [whitelisted, iswhitelisted] = useState([]);


return (
  <EthProvider>
    <div>
      <Header/>
    <h1>Vente Privée ANTK</h1>
    <NetWork />
    <SalesStatus newState={newState}/>
    <Whitelist iswhitelisted={iswhitelisted} whitelisted={whitelisted}/>
    <Devise currentState={currentState} whitelisted={whitelisted}/>
  </div>
  </EthProvider>
)
}


export default Dapp;