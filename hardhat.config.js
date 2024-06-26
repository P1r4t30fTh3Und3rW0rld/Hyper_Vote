/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");



module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "hardhat",
   networks: {
      hardhat: {},
   }
}