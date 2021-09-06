import * as React from "react";
import { useEffect, useReducer } from "react";
import { TokenInfo, tokensReducer } from "./reducer/tokensReducer";
import { BigNumber as BN } from "bignumber.js";
import { Erc20DetailedFactory } from "../interfaces/ERC20DetailedFactory";
import { Erc20Detailed } from "../interfaces/ERC20Detailed";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers, utils } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

declare global {
    interface Window {
        ethereum: any;
    }
}

type TokenConfig = {
    address: string;
    name?: string;
    symbol?: string;
    imageUri?: string;
};

type TokensToWatch = {
    [networkId: number]: TokenConfig[];
};

type Web3Context = {
    tokens: { [address: string]: TokenInfo };
};

const erc20Context = React.createContext<Web3Context | undefined>(
    undefined
);

const ERC20ContextProvider = ({
    children,
    spenderAddress,
    tokensToWatch,
}: {
    children: React.ReactNode;
    spenderAddress?: string;
    tokensToWatch: TokensToWatch;
}) => {
    const { connector, active, account, chainId } = useWeb3React()
    const [tokens, tokensDispatch] = useReducer(tokensReducer, {});

    function resetEth() {
        tokensDispatch({ type: "resetTokens" });
    }

    useEffect(() => {
        const checkBalanceAndAllowance = async (
            token: Erc20Detailed,
            decimals: number,
            address: string
        ) => {
            if (account) {
                const bal = await token.balanceOf(account);
                const balance = Number(utils.formatUnits(bal, decimals));
                const balanceBN = new BN(bal.toString()).shiftedBy(-decimals);
                var spenderAllowance = 0;
                if (spenderAddress) {
                    spenderAllowance = Number(
                        utils.formatUnits(
                            BigNumber.from(await token.balanceOf(account)),
                            decimals
                        )
                    );
                }

                tokensDispatch({
                    type: "updateTokenBalanceAllowance",
                    payload: {
                        id: address,
                        spenderAllowance: spenderAllowance,
                        balance: balance,
                        balanceBN,
                    },
                });
            }
        };

        const networkTokens =
            (tokensToWatch && chainId && tokensToWatch[chainId]) || [];

        let tokenContracts: Array<Erc20Detailed> = [];

        if (connector && account && networkTokens.length > 0) {
            networkTokens.forEach(async (token) => {
                if (token.symbol !== "ETH") {
                    const signer = await connector.getProvider();

                    const tokenContract = Erc20DetailedFactory.connect(
                        token.address,
                        new Web3Provider(signer)
                    );

                    const newTokenInfo: TokenInfo = {
                        decimals: 0,
                        balance: 0,
                        balanceBN: new BN(0),
                        imageUri: token.imageUri,
                        name: token.name,
                        symbol: token.symbol,
                        spenderAllowance: 0,
                        allowance: tokenContract.allowance,
                        approve: tokenContract.approve,
                        transfer: tokenContract.transfer
                    };

                    if (!token.name) {
                        try {
                            const tokenName = await tokenContract.name();
                            newTokenInfo.name = tokenName;
                        } catch (error) {
                            console.log(
                                "There was an error getting the token name. Does this contract implement ERC20Detailed?"
                            );
                        }
                    }
                    if (!token.symbol) {
                        try {
                            const tokenSymbol = await tokenContract.symbol();
                            newTokenInfo.symbol = tokenSymbol;
                        } catch (error) {
                            console.error(
                                "There was an error getting the token symbol. Does this contract implement ERC20Detailed?"
                            );
                        }
                    }

                    try {
                        const tokenDecimals = await tokenContract.decimals();
                        newTokenInfo.decimals = tokenDecimals;
                    } catch (error) {
                        console.error(
                            "There was an error getting the token decimals. Does this contract implement ERC20Detailed?"
                        );
                    }

                    tokensDispatch({
                        type: "addToken",
                        payload: { id: token.address, token: newTokenInfo },
                    });

                    checkBalanceAndAllowance(tokenContract, newTokenInfo.decimals, token.address);

                    // This filter is intentionally left quite loose.
                    const filterTokenApproval = tokenContract.filters.Approval(
                        account,
                        null,
                        null
                    );
                    const filterTokenTransferFrom = tokenContract.filters.Transfer(
                        account,
                        null,
                        null
                    );
                    const filterTokenTransferTo = tokenContract.filters.Transfer(
                        null,
                        account,
                        null
                    );

                    tokenContract.on(filterTokenApproval, () =>
                        checkBalanceAndAllowance(
                            tokenContract,
                            newTokenInfo.decimals,
                            token.address
                        )
                    );
                    tokenContract.on(filterTokenTransferFrom, () =>
                        checkBalanceAndAllowance(
                            tokenContract,
                            newTokenInfo.decimals,
                            token.address
                        )
                    );
                    tokenContract.on(filterTokenTransferTo, () =>
                        checkBalanceAndAllowance(
                            tokenContract,
                            newTokenInfo.decimals,
                            token.address
                        )
                    );
                    tokenContracts.push(tokenContract);
                } else {
                    
                }
            });
        }
        return () => {
            if (tokenContracts.length > 0) {
                tokenContracts.forEach((tc) => {
                    tc.removeAllListeners();
                });
                tokenContracts = [];
                tokensDispatch({ type: "resetTokens" });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chainId, connector, account]);

    return (
        <erc20Context.Provider
            value={{
                tokens,
            }}
        >
            {children}
        </erc20Context.Provider>
    );
};

const useTokensContext = () => {
    const context = React.useContext(erc20Context);
    if (context === undefined) {
        throw new Error("Context empty");
    }

    return context;
};

export { useTokensContext, ERC20ContextProvider };
