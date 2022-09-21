import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import MediaQuery from "react-responsive";

function PriceSolo() {
    const { state: { contract } } = useEth();
    const [price, setPrice] = useState();
    const [token, setTokens] = useState();

    useEffect(() => {
        if (contract) {
            getTokenRemaining()
            showPrice()
        }
    })

    async function getTokenRemaining() {
        const tokens = await contract.methods.numberOfTokenToSell().call()
        setTokens(tokens);
    }

    function showPrice() {
        if (token >= 400000000) { setPrice(0.0006) }
        else if (token >= 300000000) { setPrice(0.0008) }
        else if (token < 300000000) { setPrice(0.001) }
    }

    return (
        <div>
            <p>{price}</p>
        </div>
    )

}

export default PriceSolo;