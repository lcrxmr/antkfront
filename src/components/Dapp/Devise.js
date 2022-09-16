import { useEffect } from "react";

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
            <div><h4>Sélectionnez votre devise :</h4></div>
            <button onClick={setEth}>ETH</button>
            <p></p>
            <button onClick={setUsdt}>USDT</button>
            </div>
        )
    }

}

export default Devise;