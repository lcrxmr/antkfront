import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import MediaQuery from "react-responsive";

function Amounts({tokensRemaining, setTokensRemaining}) {
    const { state: { contract, accounts } } = useEth();
    
    const [theFonds, setFondsLeves] = useState();
    const [price, setPrice] = useState();
    const [bonus, setBonus] = useState();

    useEffect(() => {
        if (contract) {
            getTokenRemaining()
            getFunds()
            showPrice()
            getBonus()
        }
    })

    async function getTokenRemaining() {
        const token = await contract.methods.numberOfTokenToSell().call()
        setTokensRemaining(token);
    }

    function showPrice() {
        if (tokensRemaining >= 400000000) { setPrice(0.0006) }
        else if (tokensRemaining >= 300000000) { setPrice(0.0008) }
        else if (tokensRemaining < 300000000) { setPrice(0.001) }
    }

    async function getFunds() {
        const eventBuy = await contract.getPastEvents('TokensBuy', { fromBlock: 0, toBlock: 'latest' })
        let fonds = 0;
        for (let i = 0; i < eventBuy.length; i++) { fonds += Number(eventBuy[i].returnValues.amountSpendInDollars) }
        setFondsLeves(fonds)
    }

    async function getBonus() {
        const numberOfTokenBonus = await contract.methods.numberOfTokenBonus().call()
        setBonus(numberOfTokenBonus)
    }


    return (
        <div>
            <MediaQuery minWidth={1000}>
            <p></p>
            <h5>Nombre de tokens encore disponibles : {tokensRemaining} / 500000000 ANTK</h5>
            <h5>Nombres de tokens bonus restant : {bonus} ANTK</h5>
            <h5>ANTK = {price} $</h5>
            <h5>Fonds levés : {theFonds} / 400000$</h5><p></p>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
            <p></p>
            <h2>Nombre de tokens encore disponibles :  {tokensRemaining} / 500000000 ANTK</h2>
            <h2>Nombres de tokens bonus restant : {bonus} ANTK</h2>
            <h2>ANTK = {price} $</h2>
            <h2>Fonds levés : {theFonds} / 400000$</h2><p></p>
            </MediaQuery>

        </div>
    )

}

export default Amounts;