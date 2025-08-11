import { Web3 } from 'web3';
import { countABI } from './contract/countABI.js';

// Replace the link with your own deployed RPC link
const web3 = new Web3('https://avalanche-fuji.drpc.org');

async function increment() {
  // confirm that the chain Id matches the one you provided while creating the blockchain
  const chainId = await web3.eth.getChainId();
  console.log("chainId", chainId);

  // check the count balance
  const myContract = new web3.eth.Contract(countABI.abi, countABI.contractAddress);
  myContract.handleRevert = true;


  // Get the current value of count
  const myNumber = await myContract.methods.viewCount().call();
  console.log('myNumber value: ' + myNumber);

}

increment();