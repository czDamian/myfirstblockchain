# How To Check if Your Custom L1 is Setup Correctly

To check if the custom L1 you created on Avalanche is working correctly, make a simple request to the blockchain to retrieve the chain ID and the balance of the deployer.

## 1. Clone the repository


```bash
git clone https://github.com/czDamian/myfirstblockchain.git

cd myfirstblockchain
```

## 2. Install Web3.js

Web3.js is a lightweight library for querying the blockchain.

```bash
npm i web3
```

## 3. Execute the Test Script

```js
const { Web3 } = require('web3');

// Replace the link with your own deployed RPC link
const web3 = new Web3('http://127.0.0.1:44321/ext/bc/nErz4ynWZ5r2bGg5AwKjWbdWRZy4YRdVp6f4cn7B1J9QVJqq4/rpc');

async function test() {
  // Confirm that the chain ID matches the one you provided while creating the blockchain
  const chainId = await web3.eth.getChainId();
  console.log("chainId", chainId);

  // Check the balance of the deployer address
  // Replace the address with the address in your deployment summary
  const balance = await web3.eth.getBalance("0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC");
  console.log("balance", balance);
}

test();

```
Execute the code inside the  `index.js` file by running the command below and then check the output in your console
```bash
node index.js
```

## 4. Expected Output

If you see an output similar to this, it means the blockchain is working correctly on your local system:

```
chainId 500500n
balance 999999975719949999406798n
```

> **NOTE:**  
> The blockchain is deployed locally and can only be accessed locally until you deploy it to the Avalanche Fuji testnet or the Avalanche Mainnet