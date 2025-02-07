import { ethers } from "hardhat";

async function main() {
  const contractFactory = await ethers.getContractFactory("Counter");
  const deployed = await contractFactory.deploy();
  await deployed.waitForDeployment();
  console.log(`Contract deployed to:`, await deployed.getAddress());
  return await deployed.getAddress();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
