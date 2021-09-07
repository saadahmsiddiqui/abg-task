import {
    BigNumber,
    BigNumberish,
    CallOverrides,
    ContractTransaction,
    Overrides,
} from "ethers";

import { BigNumber as BN } from "bignumber.js";

export type TokenInfo = {
    name?: string;
    symbol?: string;
    decimals: number;
    balance: number;
    balanceBN: BN;
    imageUri?: string;
    spenderAllowance?: number;
    isNativeToken?: boolean;
    indexPrice: number;

    approve?: (
        spender: string,
        amount: BigNumberish,
        overrides?: Overrides
    ) => Promise<ContractTransaction>;

    transfer?: (
        recipient: string,
        amount: BigNumberish,
        overrides?: Overrides
    ) => Promise<ContractTransaction>;

    allowance?: (
        owner: string,
        spender: string,
        overrides?: CallOverrides
    ) => Promise<BigNumber>;

    updateNativeBalance?: () => void
};

export type Tokens = {
    [address: string]: TokenInfo;
};

export function tokensReducer(
    tokens: Tokens,
    action:
        | { type: "addToken"; payload: { id: string; token: TokenInfo } }
        | { type: "resetTokens" }
        | {
              type: "updateTokenBalanceAllowance";
              payload: {
                  id: string;
                  balance: number;
                  balanceBN: BN;
                  spenderAllowance: number;
              };
          }
        | {
            type: "updateIndexPrice",
            payload: {
                id: string,
                indexPrice: number
            }
        }
) {
    switch (action.type) {
        case "addToken":
            return {
                ...tokens,
                [action.payload.id]: { ...action.payload.token },
            };
        case "updateTokenBalanceAllowance":
            return {
                ...tokens,
                [action.payload.id]: {
                    ...tokens[action.payload.id],
                    balance: action.payload.balance,
                    balanceBN: action.payload.balanceBN,
                    spenderAllowance: action.payload.spenderAllowance,
                },
            };
        case "updateIndexPrice":
            return {
                ...tokens,
                [action.payload.id]: {
                    ...tokens[action.payload.id],
                    indexPrice: action.payload.indexPrice
                },
            };
        case "resetTokens":
            return {};
        default:
            return tokens;
    }
}
