import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

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
            <p></p>
            <h5>Nombre de tokens encore disponibles : {tokensRemaining} ANTK</h5>
            <h6>Nombres de tokens bonus restant : {bonus} ANTK</h6>
            <p>Prix de l'Antk {price} $</p>
            <h5>Fonds levés : {theFonds} $</h5><p></p>
        </div>
    )

}

export default Amounts;