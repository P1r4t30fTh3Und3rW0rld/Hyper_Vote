# HyperVote
HyperVote is a Blockchain based voting application that can be used to vote from anywhere with just a metamask wallet.
This is still a prototype and can be worked upon to achieve scalability and reliability of voting from anywhere.


## Installation

After you cloned the repository, you want to install the packages using

```shell
npm install
```

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
npx hardhat compile
npx hardhat node
```
After this open another terminal and run the following command.
```shell
npx hardhat run --network localhost scripts/deploy.js
```

Once the contract is deployed to the blockchain, copy the deployed contract address and paste it in the constant.js in sonstant folder.
You can also use another blockchain by writing the blockchain's endpoint in hardhat-config in json format.

Once you have pasted the address in the constant.js, simply run command

```shell
npm start
```
