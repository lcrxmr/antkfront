import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";

function Account() {
    const { state: { contract, accounts } } = useEth();
    const [Antk, setAntk] = useState();
    const [Dollars, setDollars] = useState();
    const [Bonus, setBonus] = useState();

    useEffect(() => {
        if (contract) {
            getAccount();
        }
    })

    async function getAccount() {
        const investor = await contract.methods.investors(accounts[0]).call()
        setAntk(investor.numberOfTokensPurchased)
        setDollars(investor.amountSpendInDollars)
        setBonus(investor.bonusTokens)
    }

    if (Dollars > 0) {
        return (
            <div id='account' >
                <h5>Vous avez acheté {Antk} ANTK pour un montant de {Dollars}$</h5>
                { Bonus > 0 && <p>Vous avez reçu un bonus de {Bonus} ANTK</p>}
            </div>
        )

    }
}

export default Account;