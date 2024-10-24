// src/components/InteractWithContract.js
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { getSigner } from '../ethers'; // Import getSigner function

const contractAddress = '0xYourContractAddressHere'; // Replace with your contract address
const abi = [ /* ABI of your smart contract */ ];

const InteractWithContract = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const signer = getSigner();
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);
    setContract(contractInstance);
  }, []);

  const callContractFunction = async () => {
    if (contract) {
      try {
        const result = await contract.yourFunctionName(); // Replace with your function
        console.log('Contract function result:', result);
      } catch (error) {
        console.error('Contract call error:', error);
      }
    }
  };

  return <button onClick={callContractFunction}>Call Contract Function</button>;
};

export default InteractWithContract;
