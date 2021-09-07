import {
    Button,
    Input,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import {
    useEffect,
    useReducer,
    useState,
} from "react"
import { useTokensContext } from "../../Web3/Erc20Context"
import { Redirect } from "react-router-dom"
import { useQuery } from "../../utils/useQuery"
import { useWeb3React } from "@web3-react/core"
import { ethers } from "ethers"
import TextField from "@material-ui/core/TextField"
import { transferFormReducer } from "./transferFormReducer"

const useStyles = makeStyles(
    (theme) => ({
        root: {
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100% - 64px)",
        },
        inputBox: {
            maxWidth: "500px",
        },
        input: {
            display: "block",
            marginBottom: "16px",
        },
        myBtn: {
            display: "block",
            marginBottom: "16px",
        },
        btnBox: {
            display: "flex",
            flexDirection: "column",
        },
    })
)

export default function Transfer() {
    let token = useQuery().get("token")

    const classes = useStyles()
    const { active } = useWeb3React()
    const {
        tokens,
        selectedToken,
        setSelectedToken,
    } = useTokensContext()

    const [
        isWaitingOnTransaction,
        setIsWaitingOnTransaction
    ] = useState(false)
    const [
        ethScanLink,
        setEthScanLink,
    ] = useState<string | null>(null)
    const [
        transferForm,
        dispatchTransferFormEvent,
    ] = useReducer(
        transferFormReducer,
        {
            amount: "",
            recipient: "",
            error: {},
        }
    )

    useEffect(() => {
        if (active && tokens) {
            let all =
                Object.keys(tokens)

            let tkn = all.find(
                (addr, index) => {
                    if (
                        tokens[addr]
                            .name ===
                        token
                    ) {
                        return true
                    }
                }
            )

            if (tkn) {
                setSelectedToken(
                    tokens[tkn]
                )
            } else {
                setSelectedToken(
                    tokens[all[0]]
                )
            }
        }
    }, [active, tokens])

    const isSendDisabled = () => {
        return isWaitingOnTransaction ||
        transferForm
            .error
            .amount !==
            undefined ||
        transferForm
            .error
            .recipient !==
            undefined ||
        !transferForm.amount.length ||
        !transferForm.recipient.length
    }

    return token ? (
        <div className={classes.root}>
            <div
                className={
                    classes.inputBox
                }
            >
                <TextField
                    helperText={
                        transferForm
                            .error
                            .amount
                    }
                    onBlur={(evt) =>
                        dispatchTransferFormEvent(
                            {
                                type: "VALIDATE",
                                payload: { balance: selectedToken?.balance }
                            }
                        )
                    }
                    error={
                        transferForm
                            .error
                            .amount
                            ? true
                            : false
                    }
                    label={`Enter ${
                        selectedToken
                            ? selectedToken.symbol
                            : ""
                    } amount`}
                    value={
                        transferForm.amount
                    }
                    onChange={(evt) =>
                        dispatchTransferFormEvent(
                            {
                                type: "ON_FIELD_UPDATE",
                                payload:
                                    {
                                        amount: evt
                                            .target
                                            .value,
                                    },
                            }
                        )
                    }
                    placeholder={
                        "Enter Amount"
                    }
                    className={
                        classes.input
                    }
                    variant="filled"
                />
                <small>
                    Balance:{" "}
                    {selectedToken
                        ? selectedToken.balance.toFixed(
                              4
                          )
                        : 0}
                </small>
                <TextField
                    helperText={
                        transferForm
                            .error
                            .recipient
                    }
                    error={
                        transferForm
                            .error
                            .recipient
                            ? true
                            : false
                    }
                    onBlur={(evt) =>
                        dispatchTransferFormEvent(
                            {
                                type: "VALIDATE",
                                payload: { balance: selectedToken?.balance }
                            }
                        )
                    }
                    label={`Enter Recipient Address`}
                    value={
                        transferForm.recipient
                    }
                    className={
                        classes.input
                    }
                    onChange={(evt) => {
                        dispatchTransferFormEvent(
                            {
                                type: "ON_FIELD_UPDATE",
                                payload:
                                    {
                                        recipient:
                                            evt
                                                .target
                                                .value,
                                    },
                            }
                        )
                    }}
                    variant="filled"
                />

                <div
                    className={
                        classes.btnBox
                    }
                >
                    <Button
                        onClick={(
                            evt
                        ) => {
                            if (
                                selectedToken &&
                                selectedToken.transfer
                            ) {
                                setIsWaitingOnTransaction(
                                    true
                                )
                                selectedToken
                                    .transfer(
                                        transferForm.recipient,
                                        ethers.utils.parseEther(
                                            transferForm.amount
                                        )
                                    )
                                    .then(
                                        (
                                            res
                                        ) => {
                                            setEthScanLink(
                                                `https://ropsten.etherscan.io/tx/${res.hash}`
                                            )
                                            res.wait().then(
                                                (
                                                    value
                                                ) => {
                                                    dispatchTransferFormEvent(
                                                        {
                                                            type: "ON_FIELD_UPDATE",
                                                            payload:
                                                                {
                                                                    recipient:
                                                                        "",
                                                                    amount: "",
                                                                },
                                                        }
                                                    )
                                                    setEthScanLink(
                                                        null
                                                    )
                                                    setIsWaitingOnTransaction(
                                                        false
                                                    )
                                                    if (
                                                        selectedToken.updateNativeBalance
                                                    ) {
                                                        selectedToken.updateNativeBalance()
                                                    }
                                                }
                                            )
                                        }
                                    )
                                    .catch(
                                        (
                                            err
                                        ) => {
                                            setIsWaitingOnTransaction(
                                                false
                                            )
                                            console.log(
                                                `${err.message}`
                                            )
                                        }
                                    )
                            }
                        }}
                        className={
                            classes.myBtn
                        }
                        variant="contained"
                        color="primary"
                        disabled={isSendDisabled()}
                    >
                        Send
                    </Button>
                    {ethScanLink ? (
                        <Button
                            variant="contained"
                            color="primary"
                            target="_blank"
                            className={
                                classes.myBtn
                            }
                            href={
                                ethScanLink
                            }
                        >
                            View on
                            Etherscan
                        </Button>
                    ) : null}
                </div>
            </div>
        </div>
    ) : (
        <Redirect to="/?token=ETH" />
    )
}
