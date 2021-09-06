import React from 'react';
import Web3Provider from './Web3/Web3Provider';
import Header from './components/Header/Header';
import { ERC20ContextProvider } from './Web3/Erc20Context';
import Transfer from './components/Transfer/Transfer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Web3Provider>
            <ERC20ContextProvider tokensToWatch={{
              [3]: [
                {
                  name: "DAI",
                  address: "0xad6d458402f60fd3bd25163575031acdce07538d",
                  symbol: "DAI",
                  imageUri: ""
                }
              ]
            }}>
              <Header></Header>
              <Transfer></Transfer>
            </ERC20ContextProvider>
        </Web3Provider>
      </header>
    </div>
  );
}

export default App;
