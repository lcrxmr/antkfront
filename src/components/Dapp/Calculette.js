import { useState } from "react";
import MediaQuery from "react-responsive";

function Calcul({ tokensRemaining, devise, priceOfEth, currentState, whitelisted}) {
    const [get, set] = useState()
    const [get2, set2] = useState()

    function calculNumberTokenFromDollar(amount) {
        if(amount>100000){window.alert("Vous ne pouvez pas investir plus de 100 000$ en une fois !")}
        if (tokensRemaining > 400000000) {
            if (tokensRemaining - (amount / 0.0006) >= 400000000) {
                set((amount / 0.0006).toFixed(2))
            }
            else {
                let tokensFirstPrice = tokensRemaining - 400000000
                set(((tokensFirstPrice) + (amount - (tokensFirstPrice) * 0.0006) / 0.0008).toFixed(2))
            }
        }
        else if (tokensRemaining > 300000000) {
            if (tokensRemaining - (amount / 0.0008) >= 300000000) {
                set((amount / 0.0008).toFixed(2))
            }
            else {
                let tokensFirstPrice = tokensRemaining - 300000000
                set(((tokensFirstPrice) + (amount - (tokensFirstPrice * 0.0008)) * 1000).toFixed(2))
            }
        }
        else {
            set((amount * 1000).toFixed(2))
        }
    }

    function setAmountDollars(e) {
        calculNumberTokenFromDollar(e.target.value)
    }

    function setAmountEth(e) {
        calculNumberTokenFromDollar(e.target.value*priceOfEth)
    }

    function setAmountOfTokenUSDT(e) {
        calculDollarFromTokenNumber(e.target.value)
    }

    function setAmountOfTokenETH(e) {
        calculDollarFromTokenNumber(e.target.value)
    }

    function calculDollarFromTokenNumber(number) {
        if(number>150000000){
            window.alert("Vous ne pouvez pas acheter plus de 150 millions d'ANTK en une fois !");
        }
        if(tokensRemaining>400000000) {
            if(tokensRemaining-number>400000000){
                set2((number*0.0006).toFixed(2))
            }
            else {
                let firstToken = tokensRemaining - 400000000
                set2((firstToken * 0.0006 + (number - firstToken) * 0.0008).toFixed(2))
            }
        }
        else if(tokensRemaining>300000000) {
            if(tokensRemaining-number>300000000) {
                set2((number*0.0008).toFixed(2))
            }
            else {
                let firstTokens = tokensRemaining - 300000000
                set2((firstTokens * 0.0008 + (number - firstTokens) * 0.001).toFixed(2))
            }
        }
        else (set2((number * 0.001).toFixed(2)))
    }

    let ethNumber = (get2/1500).toFixed(2)

    if(((currentState == 1) && whitelisted) || currentState == 2)

    if (devise == 'ETH') {
        return (
            <div className="calculette">
                <MediaQuery minWidth={1000}>
                <div>
                <p></p>
                <h4>Calculateur</h4>
                <button className="buttonCalculETH"> ETH </button>
                    <input className="amountInputETH" type='number' placeholder="Montant en ETH" onChange={setAmountEth} />
                    <p>Vous recevrez : {get} ANTK</p>
                </div>
                <div>
                <button className="buttonCalculETH"> ANTK </button>
                    <input className="amountInputETH" type='number' placeholder="Nombre de tokens" onChange={setAmountOfTokenETH}/>
                    <p>Montant nécessaire: {ethNumber} ETH</p>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={0} maxWidth={1000}>
                <div>
                <p></p>
                <h1>Calculateur</h1>
                <button className="buttonCalculETHMobile"> ETH </button>
                    <input className="amountInputETHMobile" type='number' placeholder="Montant en ETH" onChange={setAmountEth} />
                    <h2>Vous recevrez : {get} ANTK</h2>
                </div>
                <div>
                <button className="buttonCalculETHMobile"> ANTK </button>
                    <input className="amountInputETHMobile" type='number' placeholder="Nombre de tokens" onChange={setAmountOfTokenETH}/>
                    <h2>Montant nécessaire: {ethNumber} ETH</h2>
                </div>
                </MediaQuery>

            </div>
        )
    }

    if (devise == 'USDT') {
        return (
            <div className="calculette">
                <MediaQuery minWidth={1000}>
                <div>
                    <p></p>
                    <h4>Calculateur</h4>
                    <button className="buttonCalculUSDT"> USDT </button>
                    <input className="amountInputUSDT" type='number' placeholder="Montant en USDT" onChange={setAmountDollars} />
                    <p>Vous recevrez : {get} ANTK</p>
                </div>
                <div>
                <button className="buttonCalculUSDT"> ANTK </button>
                    <input className="amountInputUSDT" type='number' placeholder="Nombre de tokens" onChange={setAmountOfTokenUSDT}/>
                    <p>Montant nécessaire: {get2} USDT</p>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={0} maxWidth={1000}>
                <div>
                    <p></p>
                    <h1>Calculateur</h1>
                    <button className="buttonCalculUSDTMobile"> USDT </button>
                    <input className="amountInputUSDTMobile" type='number' placeholder="Montant en USDT" onChange={setAmountDollars} />
                    <h2>Vous recevrez : {get} ANTK</h2>
                </div>
                <div>
                <button className="buttonCalculUSDTMobile"> ANTK </button>
                    <input className="amountInputUSDTMobile" type='number' placeholder="Nombre de tokens" onChange={setAmountOfTokenUSDT}/>
                    <h2>Montant nécessaire: {get2} USDT</h2>
                </div>
                </MediaQuery>

            </div>
        )
    }
}

export default Calcul;