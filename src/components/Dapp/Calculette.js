import { useState } from "react";

function Calcul({ tokensRemaining, devise, priceOfEth }) {
    const [get, set] = useState([])
    const [get2, set2] = useState([])

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

    if (devise == 'ETH') {
        return (
            <div>
                <div>
                    <h5>Calculateur du nombre de token pour un montant en ETH</h5>
                    <input type='number' placeholder="Montant en ETH" onChange={setAmountEth} />
                    <p>Nombre d'ANTK que vous recevrez : {get} </p>
                </div>
                <div>
                <h5>Calculateur du prix en ETH pour un nombre de tokens</h5>
                    <input type='number' placeholder="Nombre de tokens" onChange={setAmountOfTokenETH}/>
                    <p>Montant nécessaire: {ethNumber}ETH</p>
                </div>
            </div>
        )
    }

    if (devise == 'USDT') {
        return (
            <div>
                <div>
                    <h5>Calculateur du nombre de token pour un montant en USDT</h5>
                    <input type='number' placeholder="Montant en USDT" onChange={setAmountDollars} />
                    <p>Nombre d'ANTK que vous recevrez : {get} </p>
                </div>
                <div>
                    <h5>Calculateur du prix en USDT pour un nombre de tokens</h5>
                    <input type='number' placeholder="Nombre de tokens" onChange={setAmountOfTokenUSDT}/>
                    <p>Montant nécessaire: {get2}USDT</p>
                </div>
            </div>
        )
    }
}

export default Calcul;