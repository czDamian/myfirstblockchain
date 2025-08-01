const { Web3 } = require('web3');

// Replace the link with your own deployed RPC link
const web3 = new Web3('http://127.0.0.1:44321/ext/bc/nErz4ynWZ5r2bGg5AwKjWbdWRZy4YRdVp6f4cn7B1J9QVJqq4/rpc');

async function test() {
  // confirm that the chain Id matches the one you provided while creating the blockchain
  const chainId = await web3.eth.getChainId();
  console.log("chainId", chainId);

  // check the balance of the deployer address
  // Replace the address with the address in your deployment summary
  const balance = await web3.eth.getBalance("0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC");
  console.log("balance", balance);
}

test();