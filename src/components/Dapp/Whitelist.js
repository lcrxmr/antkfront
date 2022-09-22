import useEth from "../../contexts/EthContext/useEth";
import { useEffect } from "react";
import { Buffer } from "buffer/";
window.Buffer = window.Buffer || Buffer;
const { MerkleTree } = require("merkletreejs")
const keccak256 = require("keccak256")



function Whitelist({ setProof, proof, myBool2, setMyBool2 }) {
    const { state: { contract, accounts } } = useEth();

    useEffect(() => {
        if (contract) {

            isWhitelist()
        }
    })

    // Whitelisted address
    const arrayWhitelist = ["0x39C4Ce965b9F81de90D5F91127afB807bdd1F705", "0xc2b867F4ef937Ea6C08b721FB8c99B1186D3B4EF", "0x7D15544b3C674DEbd9Bf9A7C89c1071fD7F2c45C", "0xFeC0e7fbDa4Dd0E241641096383581af6C61ba5f", "0x4eC1a7aD00b9AFba8F3171333265Db8De34F5287", "0x61C867415416E394AfAa51F37E911aaE79f79698", "0xB6ef5EF1dea4B18dea4daB5711C8733c99d03f35", "0x10730218f09BB0699115fEe96c67E8166cAf03AA", "0x42684A95f93E33538Bbb483fbe62a719D8BE9d04", "0x771999982FC377611Aba04b212DBCCe76F8a3CBa", "0xe2EC78c66eb7BcE34F187417084906a1Ba4dcdA5", "0xBC5061a317ef877B527ae978aE59223C5F8B702b", "0xA56924Df9a436A3fb0035Bc7bAfdD53a7C39DfC3", "0x9E1F93d335ffAaFD1b4a4fB4525AaE9ce4bd5f37", "0x153658249C280DA3238CFCB29D3FB8D2C296F16E", "0xE4e29f73fDEbF0F51874f9017fa6252981D19547", "0x144414179F053841b6D0980A9d8b3B3e64cC6418", "0xAAC53E78B1c7B46a7880125AdBdAB1ffF0097c76", "0x09682c56A98F6358e75A056cc469FaAE2D3e734a", "0xa6eE8DED46C173E43F84F02CDfC95cfCB2b12A2A", "0x6e6B9cC85885925ac3D7BbB55C94373bE9c9C940", "0xCFEA4615480Ee00015de2D1A6B26a82550e5c9Ea", "0x4ce7675b63B914f4cEfE00818a93c8e9B3099525", "0x979261e0c07d40dc4c991304b2ab0249fd31c979", "0xb51E3fB57f028e633C2287c01AFF0B5C960136d4", "0x9D36D09A9C0f2679B543d075E65bE7b8Af7b1200", "0xEdb06c2Fc7cA9EBBCf83A3301482b79214E26404", "0x75C6aAD50056A86e69ae5a6dc7E4913DC733fcdF", "0x88f6d8fDbE307700693F33A6790cD29C6597C405", "0xB761b171D38d398F2f1C99faf10Dc4639ebF198F", "0x439477F123c411a197473F80b0aF717469C4deCD", "0x715e7Da59bBD2f0bDACF83fB599d7Eedc84d378d"]
    let addresses = arrayWhitelist
    // let proof

    // function getProof() {
    // Hash addresses to get the leaves
    let leaves = addresses.map(addr => keccak256(addr))

    // Create tree
    let merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true })

    async function isWhitelist() {
        let theproof = merkleTree.getHexProof(keccak256(accounts[0]));
        let bool = await contract.methods.isWhitelist(theproof).call({ from: accounts[0] });
        setProof(theproof)
        setMyBool2(bool)
    }


}

export default Whitelist;