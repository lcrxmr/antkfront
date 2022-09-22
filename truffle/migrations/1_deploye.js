// const AntkPrivate = artifacts.require("AntkPrivate");

// module.exports = function (deployer) {
//   deployer.deploy(AntkPrivate);
// };



const AntkPrivate = artifacts.require("AntkPrivate");

// ::::::::::::: TestNet Goerli::::::::::::: //
module.exports = function (deployer) {
  deployer.deploy(AntkPrivate, '0x4Aec1F50164e9B09EcD966495993a47fb0B80467', '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',"0x39C4Ce965b9F81de90D5F91127afB807bdd1F705","0xe689578148f1ede3c6c1b622fc75822e9849cfb68bd7e672ecfffb7ef4d74b44" );
};


// ::::::::::::: Mainnet ::::::::::::: //
// module.exports = function (deployer) {
//   deployer.deploy(AntkPrivate, '0xdAC17F958D2ee523a2206206994597C13D831ec7', '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',"0x80920A7960670f01f63d6fA9B1f2a2Efd1C2A371","0xe689578148f1ede3c6c1b622fc75822e9849cfb68bd7e672ecfffb7ef4d74b44" );
// };
