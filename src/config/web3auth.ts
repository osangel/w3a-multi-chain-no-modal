import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK, UX_MODE, Web3AuthNoModalOptions } from "@web3auth/base";
import { AuthAdapterOptions } from "@web3auth/auth-adapter";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

const clientId = "BOL99KcIx-1Ae5DNJ8IzsygwuIeuVwccksAz5ghNaEPTwXBorHh0t20jivw1nDYaE1txI8r6GXuZ1ZHZKavCFv4"; // get from https://dashboard.web3auth.io

const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x1",
    rpcTarget: "https://rpc.ankr.com/eth",
    displayName: "Ethereum Mainnet",
    blockExplorerUrl: "https://etherscan.io",
    ticker: "ETH",
    tickerName: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  };

const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });

export const web3AuthConfig: Web3AuthNoModalOptions = {
    clientId,
  privateKeyProvider,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
};


export const authAdapterConfig: AuthAdapterOptions ={
    adapterSettings: {
      uxMode: UX_MODE.REDIRECT,
    },
  };