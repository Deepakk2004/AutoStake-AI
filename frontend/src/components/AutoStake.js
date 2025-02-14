import React, { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Safe from "@safe-global/protocol-kit";
import LitJsSdk from "lit-js-sdk";
import Web3Modal from "web3modal";

const AutoStake = () => {
  const [wallet, setWallet] = useState(null);
  const [stakingData, setStakingData] = useState(null);

  const connectWallet = async () => {
    const web3Modal = new Web3Modal();
    const provider = await web3Modal.connect();
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();
    setWallet(await signer.getAddress());
  };

  const handleStaking = async () => {
    const response = await axios.post("http://localhost:3000/auto-stake", {
      walletAddress: wallet,
      asset: "ETH",
      amount: "1",
    });
    setStakingData(response.data);
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {wallet ? `Connected: ${wallet}` : "Connect Wallet"}
      </button>
      <button onClick={handleStaking}>Auto-Stake</button>
      {stakingData && (
        <div>
          <h3>AI-Recommended Strategy</h3>
          <p>Protocol: {stakingData.bestStrategy.protocolName}</p>
          <p>Safe Smart Account: {stakingData.safeAddress}</p>
        </div>
      )}
    </div>
  );
};

export default AutoStake;
