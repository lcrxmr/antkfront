import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";

function SalesStatus({newState}) {
    const { state: { contract, accounts } } = useEth();
    const [value, readState] = useState("");
    
    let SalesStatus = ["La vente n'a pas encore commencé !", "La vente a débuté pour les Whitelistés !", "Vente en cours !"]

    useEffect(() => {
        if (contract) {
            salesStatus();
            event()
        }
    })

    async function salesStatus() {
        const status = await contract.methods.salesStatus().call({ from: accounts[0] })
        readState(SalesStatus[status]);
        newState(status)
    }

    async function event() {
        let options = {
            fromBlock: 'latest'
        };
        contract.events.newStatus(options)
            .on('data', event => newState(event.returnValues))
    }

    return (
        <div>
            <h4>Statut de la vente privée</h4>
            <p>{value}</p>
        </div>
    )

}

export default SalesStatus;