// const AntkPrivate = artifacts.require("AntkPrivate");

// module.exports = function (deployer) {
//   deployer.deploy(AntkPrivate);
// };



const AntkPrivateTest = artifacts.require("AntkPrivateTest");

module.exports = function (deployer) {


  
  deployer.deploy(AntkPrivateTest, '0x62ec7e60ddf568B3D1a5EB59412EEA12F91B2af1');
};
