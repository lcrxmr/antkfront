import useEth from "../../contexts/EthContext/useEth";
import { useEffect } from "react";



function Whitelist({whitelisted, iswhitelisted}) {
    const { state: { contract, accounts } } = useEth();

    useEffect(() => {
        if(contract)
        {isWhitelist();}
        // console.log(whitelisted)
    })


    async function isWhitelist() {
        const whiteliste = await contract.methods.investors(accounts[0]).call()
        iswhitelisted(whiteliste[0])
    }    

}

export default Whitelist;