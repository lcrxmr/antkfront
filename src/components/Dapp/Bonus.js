import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";

function Bonus() {
    const { state: { contract, accounts } } = useEth();
    const [theBonus, setBonus] = useState([]);

    useEffect(() => {
        if (contract) {
            getBonus();
        }
    })

    async function getBonus() {
        const antk = await contract.methods.investors(accounts[0]).call()
        setBonus(antk.numberOfTokensPurchased)
    }

    if (theBonus > 0) {
        return (
            <div>
                <h5>Vous avez reçu {theBonus} ANTK en bonus !</h5>
            </div>
        )
    }
}

export default Bonus;