import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import MediaQuery from "react-responsive";

function Amounts({ tokensRemaining, setTokensRemaining }) {
    const { state: { contract } } = useEth();

    const [theFonds, setFondsLeves] = useState();
    const [price, setPrice] = useState();
    const [bonus, setBonus] = useState();
    const [percent1, setPercent1] = useState();
    const [percent2, setPercent2] = useState();
    const [percent3, setPercent3] = useState();

    useEffect(() => {
        if (contract) {
            getTokenRemaining()
            getFunds()
            showPrice()
            getBonus()
            setBarre()
        }
    })

    function setBarre() {
        let tokens = 500000000 - tokensRemaining
        let tokens2 = 400000000 - tokensRemaining
        let tokens3 = 300000000 - tokensRemaining
        
        if (tokens <= 100000000 && tokens > 0) {
            setPercent1((tokens / 1000000).toFixed(2))
            setPercent2(0)
            setPercent3(0)
        }

        if (tokens <= 200000000 && tokens > 100000000) {
            setPercent2((tokens2 / 1000000).toFixed(2))
            setPercent1(100)
            setPercent3(0)
        }

        if (tokens > 200000000) {
            setPercent3((tokens3 / 3000000).toFixed(2))
            setPercent1(100) 
            setPercent2(100) 
        }
        if (tokens == 0) {
            setPercent1(0)
            setPercent2(0)
            setPercent3(0)
        }
    }

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
                <h5>ANTK = {price} $</h5>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
                <h2>ANTK = {price} $</h2>
            </MediaQuery>
        </div>
    )

}

export default Amounts;