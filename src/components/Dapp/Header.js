import { useEth } from "../../contexts/EthContext";
import { useEffect, useState } from "react";
import IERC20 from "../../contracts/IERC20.json";
import MediaQuery from "react-responsive";

function Header({ priceOfEth, setPriceEth, setboolAcc,  USDT}) {
  const {
    state: { contract, accounts },
  } = useEth();
  const [balance, setBalance] = useState([]);
  const [balanceEth, setBalanceEth] = useState([]);

  const truncate = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

  const Web3 = require("web3");
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const instance = new web3.eth.Contract(
    IERC20.abi,
    USDT
  );

  useEffect(() => {
    if (contract) {
      checkBalance();
      checkBalanceEth();
      priceEth();
      getAccount();
    }
  });

  function truncateAddr(address) {
    const match = address.match(truncate);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
  }

  async function checkBalance() {
    const result = await instance.methods.balanceOf(accounts[0]).call();
    setBalance(result / 10 ** 6);
  }

  async function checkBalanceEth() {
    const result = await web3.eth.getBalance(accounts[0]);
    setBalanceEth(result / 10 ** 18);
  }

  async function priceEth() {
    const priceEth = await contract.methods
      .getLatestPrice()
      .call({ from: accounts[0] });
    setPriceEth(priceEth / 10 ** 8);
  }

  async function getAccount() {
    const investor = await contract.methods.investors(accounts[0]).call();
    if (investor.numberOfTokensPurchased > 0) {
      setboolAcc(true);
    }
  }

  if (contract) {
    return (
      <>
        <MediaQuery minWidth={1000}>
          <div className="headerDapp">
            <h5>Votre Wallet</h5>
            <div>Prix de l'ETH = {priceOfEth} $</div>
            <div>Wallet address : {truncateAddr(accounts[0])}</div>
            <div>Balance USDT :{balance} </div>
            <div>Balance ETH : {balanceEth} </div>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
          <div className="headerDappMobile">
            <h5>Votre Wallet</h5>
            <div>Prix de l'ETH = {priceOfEth} $</div>
            <div>Wallet address : {truncateAddr(accounts[0])}</div>
            <div>Balance USDT :{balance} </div>
            <div>Balance ETH : {balanceEth} </div>
          </div>
        </MediaQuery>
      </>
    );
  }
}

export default Header;
