import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";

function Account() {
    const { state: { contract, accounts } } = useEth();
    const [Antk, setAntk] = useState([]);
    const [Dollars, setDollars] = useState([]);

    useEffect(() => {
        if (contract) {
            getAccount();
        }
    })

    async function getAccount() {
        const antk = await contract.methods.investors(accounts[0]).call()
        setAntk(antk.numberOfTokensPurchased)
        setDollars(antk.amountSpendInDollars)
    }

    if(Dollars>0) {
    return(
        <div>
            <h5>Vous avez acheté</h5>
            <p>{Antk} ANTK</p>
            <p>Pour un montant de {Dollars}$</p>
        </div>
    )
}

}

export default Account;