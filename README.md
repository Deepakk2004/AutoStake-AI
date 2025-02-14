# 🚀 **AutoStake AI** 
AutoStake AI is an *autonomous AI-powered staking agent* that optimizes staking strategies using *Venice AI, ElizaOS, Safe Smart Accounts, and Lit Agent Wallet* for *secure and automated execution*.

---

## 🏆 *Hackathon Tracks Applied*
### *1️⃣ AI Advancement: Most Autonomous Agent (Venice AI)*
- Uses *Venice AI API* for AI-driven staking strategies.
- Implements *ElizaOS* to execute staking autonomously.
- Ensures *secure transactions* using *Safe Smart Accounts*.

### *2️⃣ Smart Account Tooling: Best Use of Lit Agent Wallet (Lit Protocol)*
- Uses *Lit Agent Wallet* for signing staking transactions.
- Enhances *security & recoverability* with Safe smart accounts.
- Supports *multi-chain staking* with decentralized execution.

---

## 🔗 *Live Demo & Repository*
- *Frontend:* [AutoStake AI](https://autostake-ai.netlify.app/)  
- *Backend:* Hosted on *Render*  
- *GitHub Repository:* [🔗 Link Here]  

---

## 📌 *Features*
✅ *AI-Powered Staking Strategy (Venice AI)*  
✅ *Autonomous Execution with ElizaOS*  
✅ *Secure Smart Accounts (Safe)*  
✅ *Lit Agent Wallet for Signing & Execution*  
✅ *Multi-Chain Staking (Ethereum, Polygon, etc.)*  

---

## 🛠 *Tech Stack*
| *Component*     | *Technology*                          |
|------------------|--------------------------------------|
| Frontend        | React.js, Web3.js                     |
| Backend        | Node.js, Express.js, Safe SDK, Lit SDK |
| AI Execution   | Venice AI API, ElizaOS                 |
| Smart Accounts | Safe (Gnosis)                         |
| Signing        | Lit Agent Wallet                      |
| Blockchain     | Ethereum, Polygon                     |

---

## 📥 *Installation & Setup*
### *1️⃣ Clone the Repository*
```sh
git clone https://github.com/your-username/autostake-ai.git
cd autostake-ai
```

---

### *2️⃣ Backend Setup*

Navigate to the backend/ directory:
```sh
cd backend
npm install
```
2.1 Configure .env File

Create a .env file in the backend/ folder and add:
```sh
RPC_URL=https://your-rpc-url
PRIVATE_KEY=your-private-key
VENICE_AI_API_KEY=your-venice-ai-api-key
SAFE_ADDRESS=your-safe-smart-account-address
LIT_API_KEY=your-lit-protocol-api-key
```
2.2 Start the Backend Server
```sh
node server.js
```
✅ Backend Running on: http://localhost:5000


---

## *3️⃣ Frontend Setup*

Navigate to the frontend/ directory:
```sh
cd frontend
npm install
```
3.1 Configure Environment Variables

Create a .env file in the frontend/ folder:
```sh
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_LIT_API_KEY=your-lit-protocol-api-key
```
3.2 Start the Frontend
```sh
npm start
```
✅ Frontend Running on: http://localhost:3000


---

## *4️⃣ AI Execution (ElizaOS Agent)*

Navigate to the agent/ directory:
```sh
cd agent
pip install -r requirements.txt
```
4.1 Start ElizaOS Agent
```sh
python eliza_agent.py
```
✅ AI Agent Running & Optimizing Staking Strategies


---

🏗 Project Architecture

graph TD;
    User -->|Connects Wallet| Frontend
    Frontend -->|Calls API| Backend
    Backend -->|Fetches Strategy| Venice AI
    Backend -->|Executes| Safe Smart Account
    Backend -->|Signs & Sends| Lit Agent Wallet
    Backend -->|Sends TX| Blockchain
    Blockchain -->|Updates| User


---

🔌 API Endpoints

1️⃣ AI-Powered Staking Strategy

POST /auto-stake
Request Body:
```sh
{
  "walletAddress": "0x123...",
  "asset": "ETH",
  "amount": "1"
}
```
Response:
```sh
{
  "safeAddress": "0xabc...",
  "signedTx": "0x...",
  "bestStrategy": {
    "protocolName": "Lido",
    "protocolAddress": "0xlido..."
  }
}
```
2️⃣ Execute Staking Transaction

POST /execute-stake
Request Body:
```sh
{
  "safeAddress": "0xabc...",
  "signedTx": "0x..."
}
```
Response:
```sh
{
  "transactionHash": "0x987..."
}
```

---

## *🚀 How It Works*

1️⃣ User connects wallet (MetaMask, WalletConnect).
2️⃣ Venice AI suggests the best staking strategy.
3️⃣ ElizaOS autonomously executes the staking.
4️⃣ Transactions are securely processed using Safe Smart Accounts.
5️⃣ Lit Agent Wallet signs the transaction.
6️⃣ Funds are staked on the best available platform (e.g., Lido, Rocket Pool).


---

📌 Future Enhancements

🔥 Support More Chains (Solana, Avalanche)

🔐 Zero-Knowledge Proofs for Privacy

⚡ Automated Rebalancing Based on Market Conditions



---

🤝 Contributions

🚀 Open an Issue or Submit a PR for contributions.
