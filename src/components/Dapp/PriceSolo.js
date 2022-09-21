import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import MediaQuery from "react-responsive";

function PriceSolo({ tokensRemaining, setTokensRemaining }) {
    const { state: { contract } } = useEth();



    return (
        <div>
            {/* <MediaQuery minWidth={1000}>
                <h5>ANTK = {price} $</h5>
            </MediaQuery>
            <MediaQuery minWidth={0} maxWidth={1000}>
                <h2>ANTK = {price} $</h2>
            </MediaQuery> */}
            <p>Test</p>
        </div>
    )

}

export default PriceSolo;