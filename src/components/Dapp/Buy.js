import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import IERC20 from "../../contracts/IERC20.json";
import { MDBSpinner } from 'mdb-react-ui-kit';

function Buy({ whitelisted, currentState, devise, priceOfEth, setboolAcc }) {
    const Web3 = require('web3');
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const instance = new web3.eth.Contract(IERC20.abi, "0xb684b241a0ca25a995eae765118b4F2FFcc34409");
    const { state: { contract, accounts } } = useEth();
    const [amountInEth, setAmountInEth] = useState();
    const [amountInUSDT, setAmountInUSDT] = useState();
    const [bool, setBool] = useState();
    const [bool2, setBool2] = useState();
    

    async function buyInEth() {
        setBool(true) ;
        if (amountInEth * priceOfEth < 1) {
            window.alert("Vous devez investir un montant supérieur à 1$ !");
        }
        else if (amountInEth * priceOfEth > 100000) {
            window.alert("Vous ne pouvez pas investir plus de 100 000$ en une fois !");
        }
        else {
            await contract.methods.buyTokenWithEth().send({ from: accounts[0], value: web3.utils.toWei(amountInEth, 'ether') })
        }
        setBool(false)
        setInterval(setboolAcc(true), 10000)
    }

    async function buyInUsdt() {
        setBool2(true)
        let balanceOfUSDT = await instance.methods.balanceOf(accounts[0]).call()
        if (amountInUSDT > balanceOfUSDT * 10 ** 6) { window.alert("Vous n'avez pas assez d'USDT dans votre Wallet !"); }
        else {
            if (amountInUSDT < 1) {
                window.alert("Vous devez investir un montant supérieur à 1$ !");
            }
            else if (amountInUSDT > 100000) {
                window.alert("Vous ne pouvez pas investir plus de 100 000$ en une fois !");
            }
            else {
                await instance.methods.approve('0xF7922FFd3DA8cB2Cba90C37021710c992B5e967B', amountInUSDT * 10 ** 6).send({ from: accounts[0] })
                await contract.methods.buyTokenWithTether(amountInUSDT).send({ from: accounts[0] })
            }
        }
        setBool2(false)
        setInterval(setboolAcc(true), 10000)
    }

    function setAmountEth(amount) {
        setAmountInEth(amount.target.value)
    }

    function setAmountUsdt(amount) {
        setAmountInUSDT(amount.target.value)
    }

    if (((whitelisted && currentState == 1) || currentState == 2) && devise == "ETH") {
        return (
            <div >
                <button onClick={buyInEth} className="buttonETH">Acheter{bool == true && <MDBSpinner class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"/> }</button>
                <input className="amountInputETH" type='text' placeholder="Montant en ETH" onChange={setAmountEth} />
            </div>
        )
    }

    if (((whitelisted && currentState == 1) || currentState == 2) && devise == "USDT") {
        return (
            <div >
                <button onClick={buyInUsdt} className="buttonUSDT">Acheter{bool2 == true && <MDBSpinner class="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"/> }</button>
                <input className="amountInputUSDT" type='text' placeholder="Montant en USDT" onChange={setAmountUsdt} />
            </div>
        )
    }
}

export default Buy;