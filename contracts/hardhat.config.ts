import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    core_testnet: {
      url: "https://rpc.test2.btcs.network",
      accounts: [
        "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
    },
  },

  etherscan: {
    apiKey: {
      core_testnet: "4c18edb883934f1a9f01e5c2827da819",
    },
    customChains: [
      {
        network: "core_testnet",
        chainId: 1114,
        urls: {
          apiURL: "https://scan.test2.btcs.network/api/",
          browserURL: "https://scan.test2.btcs.network/",
        },
      },
    ],
  },
};

export default config;
