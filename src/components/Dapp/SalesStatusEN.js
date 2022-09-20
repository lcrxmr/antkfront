import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

function SalesStatus({ newState, whitelisted, currentState }) {
  const {
    state: { contract, accounts },
  } = useEth();

  useEffect(() => {
    if (contract) {
      salesStatus();
      event();
    }
  });

  async function salesStatus() {
    const status = await contract.methods
      .salesStatus()
      .call({ from: accounts[0] });
    newState(status);
  }

  async function event() {
    let options = {
      fromBlock: "latest",
    };
    contract.events
      .newStatus(options)
      .on("data", (event) => newState(event.returnValues));
  }

  if (currentState == 0) {
    return (
      <div>
              <MediaQuery minWidth={1000}>
              <h4>Sale has not started</h4>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div style={{marginTop: "30px"}}>
                <h1>Sale has not started</h1>
              </div>
            </MediaQuery>
      </div>
    );
  }
  if (currentState == 1 && whitelisted) {
    return (
      <div>
              <MediaQuery minWidth={1000}>
              <h4>Whitelist :</h4>
              <button className="buttonStatus"> RUNNING </button>
              <p>You can buy tokens !</p>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div style={{marginTop: "30px"}}>
                <h1>Whitelist:</h1>
                <button className="buttonStatus"> RUNNING </button>
                <h2>You can buy tokens !</h2>
              </div>
            </MediaQuery>
      </div>
    );
  }

  if (currentState == 1 && !whitelisted) {
    return (
      <div>
        <MediaQuery minWidth={1000}>
              <h4>Whitelist only :</h4>
              <button className="buttonStatus"> RUNNING </button>
              <p>Please wait for the public sale !</p>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div style={{marginTop: "30px"}}>
                <h1>Whitelist only :</h1>
                <button className="buttonStatus"> RUNNING </button>
                <h2>Please wait for the public sale !</h2>
              </div>
            </MediaQuery>
      </div>
    );
  }

  if (currentState == 2) {
    return (
      <div>
        <MediaQuery minWidth={1000}>
          <h4>Phase 1 :</h4>
          <button className="buttonStatus"> RUNNING </button>
          <p>You can buy tokens !</p>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
          <div style={{marginTop: "30px"}}>
            <h1>Phase 1 :</h1>
            <button className="buttonStatus"> RUNNING </button>
            <h2>You can buy tokens !</h2>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default SalesStatus;
