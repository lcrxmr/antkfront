import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function Amounts() {
    const { state: { contract, accounts } } = useEth();
    const [tokensRemaining, setTokensRemaining] = useState();
    const [theFonds, setFondsLeves] = useState();

    useEffect(() => {
        if (contract) {
            getTokenRemaining()
            getFunds()
        }
    })

    async function getTokenRemaining() {
        const token = await contract.methods.numberOfTokenToSell().call({ from: accounts[0] })
        setTokensRemaining(token);
    }


    async function getFunds() {
        const eventBuy = await contract.getPastEvents('TokensBuy', { fromBlock: 0, toBlock: 'latest' })
        let array = [];
        let fonds = 0;
        for (let i = 0; i < eventBuy.length; i++) { array.push(eventBuy[i].returnValues.amountSpendInDollars) }
        for (let i = 0; i < array.length; i++) {
            fonds += Number(array[i]);
        }
        setFondsLeves(fonds)
    }

    if (contract) {
        return (
            <div>
                <h5>Nombre de tokens restant à acheter : {tokensRemaining} ANTK</h5>
                <h5>Fonds levés : {theFonds} $</h5>
            </div>
        )
    }
}

export default Amounts;