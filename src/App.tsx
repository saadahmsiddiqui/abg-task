import React from "react"
import Web3Provider from "./Web3/Web3Provider"
import Header from "./components/Header/Header"
import { ERC20ContextProvider } from "./Web3/Erc20Context"
import Transfer from "./components/Transfer/Transfer"
import tokens from "./tokens"
// import {
//     BrowserRouter as Router,
//   } from "react-router-dom";

const App = () => {
    return (
        <Web3Provider>
            <ERC20ContextProvider
                tokensToWatch={tokens}
            >
                    <Header />
                    <Transfer />
            </ERC20ContextProvider>
        </Web3Provider>
    )
}

export default App
