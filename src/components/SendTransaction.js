// src/components/SendTransaction.js
import React, { useState } from 'react';
import { ethers } from "ethers";

const SendTransaction = () => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');

    const sendTransaction = async () => {
        try {
            const provider = new ethers.BrowserProvider(window.ethereum); // Use the correct provider
            const signer = await provider.getSigner();

            const transaction = {
                to: recipient,
                value: ethers.parseEther(amount), // Use ethers.parseEther
            };

            const txResponse = await signer.sendTransaction(transaction);
            await txResponse.wait(); // Wait for transaction confirmation
            console.log('Transaction successful:', txResponse);
        } catch (error) {
            console.error('Error sending transaction:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="text"
                placeholder="Amount in ETH"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={sendTransaction}>Send Transaction</button>
        </div>
    );
};

export default SendTransaction;
