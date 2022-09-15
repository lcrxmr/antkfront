import { EthProvider } from "../../contexts/EthContext";
import NetWork from "./Network";
import { useState } from "react";
import SalesStatus from "./SalesStatus";

function Dapp (){
  const [currentState, newState] = useState([]);

return (
  <EthProvider>
    <div>
    <h1>Device Test!</h1>
    <NetWork />
    <SalesStatus currentState={currentState} newState={newState}/>
  </div>
  </EthProvider>
)
}


export default Dapp;