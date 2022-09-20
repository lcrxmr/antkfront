import { useEffect } from "react";
import MediaQuery from "react-responsive";

function Devise({ whitelisted, currentState, setDevise }) {

    function setEth() {
        setDevise("ETH")
    }

    function setUsdt() {
        setDevise("USDT")
    }

    if ((whitelisted && currentState == 1) || currentState == 2) {
        return (
            <div>
            <MediaQuery minWidth={1000}>
            <div><h4>Choose currency :</h4></div>
            <div className="currencyButtons">
            <button onClick={setEth} className="buttonETH">ETH</button>
            <p></p>
            <button onClick={setUsdt} className="buttonUSDT">USDT</button>
            <p></p>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
            <div><h1>Choose currency :</h1></div>
            <div className="currencyButtonsMobile">
            <button onClick={setEth} className="buttonETHMobile">ETH</button>
            <p></p>
            <button onClick={setUsdt} className="buttonUSDTMobile">USDT</button>
            <p></p>
            </div>
            </MediaQuery>


            </div>
        )
    }

}

export default Devise;