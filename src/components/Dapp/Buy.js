import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import IERC20 from "../../contracts/IERC20.json";

function Buy({ whitelisted, currentState, devise }) {
    const Web3 = require('web3');
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const instance = new web3.eth.Contract(IERC20.abi, "0x05e797F41f54e7Ef542775143B43f0B224B11760");
    const { state: { contract, accounts } } = useEth();
    const [amountInEth, setAmountInEth] = useState();
    const [amountInUSDT, setAmountInUSDT] = useState();

    async function buyInEth() {
        if (amountInEth == 0) {
            window.alert("Vous devez écrire un montant supérieur à 0 ETH!");
        }
        else {

            await contract.methods.buyTokenWithEth().send({ from: accounts[0], value: web3.utils.toWei(amountInEth, 'ether') })
        }
    }

    async function buyInUsdt() {
        if (amountInUSDT < 1) {
            window.alert("Vous devez écrire un montant supérieur à 1$ !");
        }
        else {
            await instance.methods.approve('0xE130E93b386B7FA49163713160C7353E854b51c9', amountInUSDT*10**6).send({ from: accounts[0]})
            await contract.methods.buyTokenWithTether(amountInUSDT).send({ from: accounts[0] })
        }

    }

    function setAmountEth(amount) {
        setAmountInEth(amount.target.value)
    }

    function setAmountUsdt(amount) {
        setAmountInUSDT(amount.target.value)
    }

    if (((whitelisted && currentState == 1) || currentState == 2) && devise == "ETH") {
        return (
            <div>
                <button onClick={buyInEth}>Amount in ETH :</button>
                <input type='text' onChange={setAmountEth} />
            </div>
        )

    }

    if (((whitelisted && currentState == 1) || currentState == 2) && devise == "USDT") {
        return (
            <div>
                <button onClick={buyInUsdt}>Amount in USDT :</button>
                <input type='text' onChange={setAmountUsdt} />
            </div>
        )
    }
}

export default Buy;