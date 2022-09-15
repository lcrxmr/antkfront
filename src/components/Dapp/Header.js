import { useEth } from "../../contexts/EthContext";
import { useEffect, useState } from "react";
import IERC20 from "../../contracts/IERC20.json";

function Header() {
    const { state: { contract, accounts } } = useEth();
    const [balance, setBalance] = useState([]);
    const [balanceEth, setBalanceEth] = useState([]);
    const [priceOfEth, setPriceEth] = useState([]);


    const truncate = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

    const Web3 = require('web3');
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const instance = new web3.eth.Contract(IERC20.abi, "0x4Aec1F50164e9B09EcD966495993a47fb0B80467");


    useEffect(() => {
        if (contract) {
            checkBalance()
            checkBalanceEth()
            priceEth()
        }
    })

    function truncateAddr(address) {
        const match = address.match(truncate);
        if (!match) return address;
        return `${match[1]}…${match[2]}`;
    }

    async function checkBalance() {
        const result = await instance.methods.balanceOf(accounts[0]).call();
        setBalance(result/10**18)
    }

    async function checkBalanceEth() {
        const result = await web3.eth.getBalance(accounts[0])
        setBalanceEth(result/10**18)
    }
     
    async function priceEth() {
        const priceEth = await contract.methods.getLatestPrice().call()
        setPriceEth(priceEth/10**8)
    }



    if (contract) {
        return (
            <div>
            <div>Prix de l'ETH {priceOfEth} $</div>
            <div>{truncateAddr(accounts[0])}</div>
            <div>{balance} USDT</div>
            <div>{balanceEth} ETH</div>
            </div>
        )
    }
}

export default Header;