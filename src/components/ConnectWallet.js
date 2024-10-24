// src/components/ConnectWallet.js
import React, { useState } from 'react'; // Removed useEffect import
import { Button, Typography } from '@mui/material'; // Import Button and Typography from Material-UI
import { initEthers, getAccount } from '../ethers';
import './ConnectWallet.css'; // Import your CSS file for styles

const ConnectWallet = () => {
    const [account, setAccount] = useState(null); // State to store the connected account

    const connectWallet = async () => {
        try {
            await initEthers();
            const accountAddress = await getAccount(); // Get the connected account address
            setAccount(accountAddress); // Update the state with the account address
            console.log("Wallet connected!", accountAddress);
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    };

    return (
        <div className="connect-wallet-container"> {/* Container for centering */}
            {account ? ( // If an account is connected, show the address
                <Typography variant="h6">{account}</Typography>
            ) : (
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={connectWallet} 
                    className="connect-wallet-button"
                >
                    Connect Wallet
                </Button>
            )}
        </div>
    );
};

export default ConnectWallet;
