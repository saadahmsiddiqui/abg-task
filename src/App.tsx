import React from "react"
import Web3Provider from "./Web3/Web3Provider"
import Header from "./components/Header/Header"
import { ERC20ContextProvider } from "./Web3/Erc20Context"
import Transfer from "./components/Transfer/Transfer"
import { BrowserRouter as Router } from "react-router-dom"
// import {
//     BrowserRouter as Router,
//   } from "react-router-dom";

const App = () => {
    return (
        <Web3Provider>
            <ERC20ContextProvider
                tokensToWatch={{
                    [3]: [
                        {
                            name: "DAI",
                            address:
                                "0xad6d458402f60fd3bd25163575031acdce07538d",
                            symbol: "DAI",
                            imageUri:
                                "",
                        },
                        {
                            name: "ETH",
                            address:
                                "ETH",
                            symbol: "ETH",
                            imageUri:
                                "",
                        },
                        {
                            name: "TST",
                            address: "0x722dd3F80BAC40c951b51BdD28Dd19d435762180",
                            symbol: "TST",
                            imageUri: ""
                        }
                    ],
                }}
            >
                {/* <Router> */}

                <Router>
                    <Header></Header>
                    <Transfer></Transfer>
                </Router>
                {/* </Router> */}
            </ERC20ContextProvider>
        </Web3Provider>
    )
}

export default App
