// src/ethers.js
import { ethers } from 'ethers';

export const getProvider = () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    return provider;
};

export const initEthers = async () => {
    try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Accounts requested successfully.");
    } catch (error) {
        console.error("Error requesting accounts:", error);
    }
};

export const getAccount = async () => {
    const provider = getProvider();
    const signer = await provider.getSigner();
    const address = await signer.getAddress(); // Get the connected account address
    return address;
};
