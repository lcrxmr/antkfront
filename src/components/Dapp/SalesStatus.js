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
              <h4>La vente n'a pas commencée</h4>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div style={{marginTop: "30px"}}>
                <h1>La vente n'a pas commencée</h1>
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
              <button className="buttonStatus"> EN COURS </button>
              <p>Vous pouvez acheter vos tokens !</p>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div style={{marginTop: "30px"}}>
                <h1>Whitelist:</h1>
                <button className="buttonStatus"> EN COURS </button>
                <h2>Vous pouvez acheter vos tokens !</h2>
              </div>
            </MediaQuery>
      </div>
    );
  }

  if (currentState == 1 && !whitelisted) {
    return (
      <div>
        <MediaQuery minWidth={1000}>
              <h4>Whitelist seulement :</h4>
              <button className="buttonStatus"> EN COURS </button>
              <p>Vous devez attendre la phase
          public pour acheter vos tokens!</p>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
              <div style={{marginTop: "30px"}}>
                <h1>Whitelist seulement</h1>
                <button className="buttonStatus"> EN COURS </button>
                <h2>Vous devez attendre la phase
          public pour acheter vos tokens!</h2>
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
          <button className="buttonStatus"> EN COURS </button>
          <p>Vous pouvez acheter vos tokens !</p>
        </MediaQuery>
        <MediaQuery minWidth={0} maxWidth={1000}>
          <div style={{marginTop: "30px"}}>
            <h1>Statut de la vente :</h1>
            <button className="buttonStatus"> EN COURS </button>
            <h2>Vous pouvez acheter vos tokens !</h2>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default SalesStatus;
