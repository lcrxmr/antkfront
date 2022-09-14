import { EthProvider } from "../../contexts/EthContext";
import NetWork from "./Network";

function Dapp (){
return (
  <EthProvider>
    <div>
    <h1>Device Test!</h1>
    <NetWork />
  </div>
  </EthProvider>
)
}


export default Dapp;