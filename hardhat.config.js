require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const alchemyUrl = process.env.ALCHEMY_URL;
const prKey = process.env.PRIVATE_KEY;
const ethScanApi = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: alchemyUrl,
      accounts: [prKey],
    },
    scrollSepolia: { // La red ahora está correctamente dentro de "networks"
      url: alchemyUrl, // URL de Scroll Sepolia desde Alchemy
      chainId: 534351, // Chain ID de Scroll Sepolia
      accounts: [prKey],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ethScanApi,
    },
    customChains: [
      {
        network: "scrollSepolia",
        chainId: 534351,
        urls: {
          apiURL: "https://api-sepolia.scrollscan.dev/api", // URL de API para Scroll
          browserURL: "https://sepolia.scrollscan.dev", // Explorador de Scroll Sepolia
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
};