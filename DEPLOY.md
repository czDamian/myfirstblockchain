# How to Deploy Your L1 using Avalanche-CLI

To deploy the blockchain you just configured in the  [CREATE.md](./CREATE.md), run the command 

```bash
avalanche blockchain deploy <L1Name>
```
Replace < L1Name > with the name you used while creating the L1.
- choose local network when prompted to choose network for deployment. It will take 1-3 mins for the deployment to complete. You will see the deployment details once the deployment is successful. Use the RPC and token details to connect your L1 to core wallet or meta mask. You can now deploy contracts and make transactions on your L1.

![L1 Deployed successfully](/public/wallet-connection.png)

> **NOTE:**  
> Shutting down your computer or stopping the VM will temporarily stop your RPC from working until you restart the network. 
> Use local network for testing purposes only.
>To make your RPC node publicly available to everyone, consider hosting your node on a cloud server like AWS which doesn't require your computer to always be on.


Shut down your local deployment with:
```bash
avalanche network stop
```

Restart your local deployment (from where you left off) with:
```bash
avalanche network start
```