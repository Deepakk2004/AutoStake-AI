import requests
import json

VENICE_AI_API = "https://api.venice.ai/inference"
SAFE_API = "https://safe.transaction.service"
LIT_API = "https://lit.protocol.execute"

def fetch_staking_strategy(asset, amount):
    response = requests.post(VENICE_AI_API, json={"input": {"asset": asset, "amount": amount}})
    return response.json()["bestStrategy"]

def execute_staking(wallet, strategy):
    safe_tx = {
        "to": strategy["protocolAddress"],
        "value": strategy["amount"],
        "data": "0x"  # Staking calldata
    }
    
    # Execute transaction via Safe
    safe_response = requests.post(f"{SAFE_API}/transactions", json=safe_tx)
    
    # Use Lit to sign transaction securely
    lit_response = requests.post(f"{LIT_API}/sign", json={"transaction": safe_response.json()})
    
    return lit_response.json()

def main():
    user_wallet = "0x123..."
    strategy = fetch_staking_strategy("ETH", "1")
    tx_status = execute_staking(user_wallet, strategy)
    print("Staking Executed:", tx_status)

if __name__ == "__main__":
    main()
