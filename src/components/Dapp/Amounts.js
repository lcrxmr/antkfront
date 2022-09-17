import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function Amounts({tokensRemaining, setTokensRemaining}) {
    const { state: { contract, accounts } } = useEth();
    
    const [theFonds, setFondsLeves] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {
        if (contract) {
            getTokenRemaining()
            getFunds()
            showPrice()
        }
    })

    async function getTokenRemaining() {
        const token = await contract.methods.numberOfTokenToSell().call({ from: accounts[0] })
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


    return (
        <div>
            <h5>Nombre de tokens restant à acheter : {tokensRemaining} ANTK</h5>
            <p>Prix de l'Antk {price} $</p>
            <h5>Fonds levés : {theFonds} $</h5>
        </div>
    )

}

export default Amounts;