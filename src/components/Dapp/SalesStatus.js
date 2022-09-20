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
        <h4>Statut de la vente :</h4>
        <p>La vente n'a pas encore commencé !</p>
      </div>
    );
  }
  if (currentState == 1 && whitelisted) {
    return (
      <div>
        <h4>Statut de la vente :</h4>
        <p>La vente a débuté pour les Whitelistés !</p>
        <p>Votre addresse est whitelistée, vous pouvez acheter vos tokens !</p>
      </div>
    );
  }

  if (currentState == 1 && !whitelisted) {
    return (
      <div>
        <h4>Statut de la vente :</h4>
        <p>La vente a débuté pour les Whitelistés !</p>
        <p>
          Votre addresse n'est pas whitelistée, vous devez attendre la phase
          public pour acheter vos tokens !
        </p>
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
