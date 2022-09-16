import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";

function SalesStatus({ newState, whitelisted, currentState }) {
    const { state: { contract, accounts } } = useEth();

    useEffect(() => {
        if (contract) {
            salesStatus()
            event()
        }
    })

    async function salesStatus() {
        const status = await contract.methods.salesStatus().call({ from: accounts[0] })
        newState(status)
    }

    async function event() {
        let options = {
            fromBlock: 'latest'
        };
        contract.events.newStatus(options)
            .on('data', event => newState(event.returnValues))
    }

        if (currentState == 0) {
            return (
                <div>
                    <h4>Statut de la vente privée</h4>
                    <p>La vente n'a pas encore commencé !</p>
                </div>
            )
        }
        if ((currentState == 1) && whitelisted) {
            return (
                <div>
                    <h4>Statut de la vente privée</h4>
                    <p>La vente a débuté pour les Whitelistés !</p>
                    <p>Votre addresse est whitelistée, vous pouvez acheter vos tokens !</p>
                </div>
            )
        }
        
        if ((currentState == 1) && !whitelisted) {
            return (
                <div>
                    <h4>Statut de la vente privée</h4>
                    <p>La vente a débuté pour les Whitelistés !</p>
                    <p>Votre addresse n'est pas whitelistée, vous devez attendre la phase public pour acheter vos tokens !</p>
                </div>
            )
        }
        
        if (currentState == 2) {
            return (
                <div>
                    <h4>Statut de la vente privée</h4>
                    <p>La vente est en cours !</p>
                    <p>Vous pouvez acheter vos tokens !</p>
                </div>
            )
        }
    

}

export default SalesStatus;