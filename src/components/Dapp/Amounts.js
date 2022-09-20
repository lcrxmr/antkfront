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
            setPercent1(tokens / 1000000)
            setPercent2(0)
            setPercent3(0)
        }
        else { setPercent1(100) }

        if (tokens <= 200000000 && tokens > 100000000) {
            setPercent2(tokens2 / 1000000)
            setPercent3(0)
        }
        else { setPercent2(100) }

        if (tokens > 200000000) {
            setPercent3(tokens3 / 3000000)
            
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
                <p></p>
                <h5>Nombre de tokens encore disponibles : {tokensRemaining} / 500000000 ANTK</h5>
                <h5>Nombres de tokens bonus restant : {bonus} ANTK</h5>
                <h5>ANTK = {price} $</h5>
                <h5>Fonds levés : {theFonds} / 400000$</h5><p></p>

                <h2 height='30' width='200' id="mother">Progression</h2>
            <div class="skillbar">
                <div class="skillbar-progress one">Phase un 
                    <div class="skillbar-progress-one" style={{
                        width: percent1*2
                    }}> {percent1 + '%'} </div>
                </div>
                <div class="skillbar-progress two">Phase deux 
                    <div class="skillbar-progress-two" style={{
                        width: percent2*2
                    }}>{percent2 + '%'}</div>  
                </div>
                <div class="skillbar-progress three"> Phase trois
                    <div class="skillbar-progress-three" style={{
                        width: percent3*6
                    }} > {percent3 +'%'}</div>
                </div>
            </div>

            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
                <p></p>
                <h2>Nombre de tokens encore disponibles :  {tokensRemaining} / 500000000 ANTK</h2>
                <h2>Nombres de tokens bonus restant : {bonus} ANTK</h2>
                <h2>ANTK = {price} $</h2>
                <h2>Fonds levés : {theFonds} / 400000$</h2><p></p>
                <h2 height='30' width='200' id="mother">Progression</h2>
            <div class="skillbarMobile">
                <div class="skillbar-progress one">Phase un 
                    <div class="skillbar-progress-one" style={{
                        width: percent1*2
                    }}> {percent1 + '%'}</div>
                </div>
                <div class="skillbar-progress two">Phase deux
                    <div class="skillbar-progress-two" style={{
                        width: percent2*2
                    }}> {percent2 + '%'}</div>  
                </div>
                <div class="skillbar-progress three"> Phase trois 
                    <div class="skillbar-progress-three" style={{
                        width: percent3*6
                    }} >{percent3 +'%'}</div>
                </div>
            </div>
            </MediaQuery>


        </div>
    )

}

export default Amounts;