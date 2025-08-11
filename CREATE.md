# How to Create Your First L1 using Avalanche-CLI

Avalanche CLI is a command line tool that gives developers access to everything Avalanche. It helps developers develop and test L1s.


> **NOTE:**  
> Avalanche CLI doesn't support windows by default, so you need to install WSL to be able to run the CLI commands on windows.

## Install WSL (On Windows Only)

```bash
wsl --install

```
To check if WSL is already installed or installed correctly, run the command

```bash
wsl --list --verbose
```
It will print out the VM you have installed and the version if installed correctly.
Once you have WSL installed, proceed to the next step. 

# Install the Avalanche CLI
- Open your preferred terminal in (vscode, powershell, terminal) and run the command (if you're using windows make sure wsl is running)

```bash
curl -sSfL https://raw.githubusercontent.com/ava-labs/avalanche-cli/main/scripts/install.sh | sh -s
```
The command above downloads the binary for Avalanche CLI and installs it inside the ~/bin directory.

Additionally, run the command below to add the binary to your path
```bash
export PATH=~/bin:$PATH
```
To verify if you completed the steps above correctly, run the avalancche command below. It will show the command list as shown in the image below
```bash
avalanche
```
![Installation Successful](/public/installation-success.png)



# Create your custom L1
After verifying that the Avalanche CLI was installed correctly, proceed with the steps below
```bash
avalanche blockchain create <L1Name>
```
change < L1Name > to your preferred name for the L1 eg: myfirstblockchain.
You will be prompted to select from a list of options in order to complete the deployment. For each of the options,
- choose subnet EVM
- choose Proof of Authority
- choose Get address from an existing stored key (created from avalanche key create or avalanche key import)
- choose ewoq as the deployer address
- accept to use the defaults for a test environment
- choose a custom chain ID - eg: 500500
- choose a token name -eg: MFB

This will create a configuration for your custom L1. Next step will be to [deploy](./DEPLOY.md) the L1 to a local network, testnet or mainnet 


![L1 created successfully](/public/creation-success.png)
[Read More](https://build.avax.network/docs/tooling/create-avalanche-l1)
