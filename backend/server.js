require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { ethers } = require("ethers");
const { SafeFactory } = require("@safe-global/protocol-kit");
const LitJsSdk = require("lit-js-sdk");

const app = express();
app.use(express.json());

const VENICE_AI_API = "https://api.venice.ai/inference";
const SAFE_FACTORY_ADDRESS = "0x123..."; // Replace with Safe factory address
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Initialize Lit client
const litClient = new LitJsSdk.LitNodeClient();
litClient.connect();

async function createSafeAccount(ownerAddress) {
  const safeFactory = await SafeFactory.create({ ethAdapter: signer });
  const safe = await safeFactory.deploySafe({
    owners: [ownerAddress],
    threshold: 1,
  });
  return safe.getAddress();
}

// AI-Powered Staking Strategy
app.post("/auto-stake", async (req, res) => {
  try {
    const { walletAddress, asset, amount } = req.body;

    // Step 1: Fetch AI-generated staking strategy
    const aiResponse = await axios.post(VENICE_AI_API, {
      input: { asset, amount },
    });
    const bestStrategy = aiResponse.data.bestStrategy;

    // Step 2: Create Safe smart account if not exists
    const safeAddress = await createSafeAccount(walletAddress);

    // Step 3: Sign transaction using Lit Agent Wallet
    const txData = {
      to: bestStrategy.protocolAddress,
      value: ethers.utils.parseEther(amount),
      data: "0x",
    };

    const signedTx = await litClient.signAndSendTransaction({
      chain: "ethereum",
      tx: txData,
    });

    res.json({ safeAddress, signedTx, bestStrategy });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
