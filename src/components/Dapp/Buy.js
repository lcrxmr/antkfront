import { useState, useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";
import IERC20 from "../../contracts/IERC20.json";
import { MDBSpinner } from 'mdb-react-ui-kit';
import MediaQuery from "react-responsive";

function Buy({ currentState, devise, priceOfEth, setboolAcc, USDT, Private, proof, myBool2 }) {
    const Web3 = require('web3');
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const instance = new web3.eth.Contract(IERC20.abi, USDT);
    const { state: { contract, accounts } } = useEth();
    const [amountInEth, setAmountInEth] = useState();
    const [amountInUSDT, setAmountInUSDT] = useState();
    const [bool, setBool] = useState();
    const [bool2, setBool2] = useState();
    const [whitelisted, setwhitelisted] = useState();

    useEffect(() => {
        if (contract) {
            // getWhitelist()
            // console.log(myBool2)
        }
    });

    async function getWhitelist() {
        let bool = await contract.methods.isWhitelist(proof).call()
        // setwhitelisted(bool)
        // console.log(whitelisted)
    }

    async function buyInEth() {
        setBool(true);
        try {
            if (amountInEth * priceOfEth < 1) {
                window.alert("Vous devez investir un montant supérieur à 1$ !");
            }
            else if (amountInEth * priceOfEth > 100000) {
                window.alert("Vous ne pouvez pas investir plus de 100 000$ en une fois !");
            }
            else {
                await contract.methods.buyTokenWithEth(proof).send({ from: accounts[0], value: web3.utils.toWei(amountInEth, 'ether') })
            }
            setBool(false)
            setInterval(setboolAcc(true), 3000)
        }
        catch {
            setBool(false)
            window.alert("Échec de la transaction !");
        }
    }

    async function buyInUsdt() {
        setBool2(true)
        try {
            if (amountInUSDT < 1) {
                window.alert("Vous devez investir un montant supérieur à 1$ !");
            }
            else if (amountInUSDT > 100000) {
                window.alert("Vous ne pouvez pas investir plus de 100 000$ en une fois !");
            }
            else {
                await instance.methods.approve(Private, amountInUSDT * 10 ** 6).send({ from: accounts[0] })
                await contract.methods.buyTokenWithTether(amountInUSDT, proof).send({ from: accounts[0] })
            }

            setBool2(false)
            setboolAcc(true)
        }
        catch {
            window.alert("Échec de la transaction !");
            setBool2(false)
        }
    }

    function setAmountEth(amount) {
        setAmountInEth(amount.target.value)
    }

    function setAmountUsdt(amount) {
        setAmountInUSDT(amount.target.value)
    }

    if (((myBool2 && currentState == 1) || currentState == 2) && devise == "ETH") {
        return (
            <div >
                <MediaQuery minWidth={1000}>
                    <button onClick={buyInEth} className="buttonBuyETH">ACHETER{bool == true && <MDBSpinner class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true" />}</button>
                    <input className="amountInputETH" type='text' placeholder="Montant en ETH" onChange={setAmountEth} />
                </MediaQuery>
                <MediaQuery minWidth={0} maxWidth={1000}>
                    <button onClick={buyInEth} className="buttonBuyETHMobile">ACHETER{bool == true && <MDBSpinner class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true" />}</button>
                    <input className="amountInputETHMobile" type='text' placeholder="Montant en ETH" onChange={setAmountEth} />
                </MediaQuery>

            </div>
        )
    }

    if (((myBool2 && currentState == 1) || currentState == 2) && devise == "USDT") {
        return (
            <div >
                <MediaQuery minWidth={1000}>
                    <button onClick={buyInUsdt} className="buttonBuyUSDT">ACHETER{bool2 == true && <MDBSpinner class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true" />}</button>
                    <input className="amountInputUSDT" type='text' placeholder="Montant en USDT" onChange={setAmountUsdt} />
                </MediaQuery>
                <MediaQuery minWidth={0} maxWidth={1000}>
                    <button onClick={buyInUsdt} className="buttonBuyUSDTMobile">ACHETER{bool2 == true && <MDBSpinner class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true" />}</button>
                    <input className="amountInputUSDTMobile" type='text' placeholder="Montant en USDT" onChange={setAmountUsdt} />
                </MediaQuery>

            </div>
        )
    }
}

export default Buy;