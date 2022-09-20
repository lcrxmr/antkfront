import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";

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
            <>
            <MediaQuery minWidth={1000}>
            <div id='account' >
                <p>You bought {Antk} ANTK for a total of {Dollars}$</p>
                { Bonus > 0 && <p>You received a bonus of {Bonus} ANTK</p>}
            </div>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
            <div id='accountMobile' >
                <p>You bought {Antk} ANTK for a total of {Dollars}$</p>
                { Bonus > 0 && <p>You received a bonus of {Bonus} ANTK</p>}
            </div>
            </MediaQuery>
            </>

        )

    }
}

export default Account;