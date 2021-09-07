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

import { useFormik } from "formik"
import * as yup from "yup"

const validationSchema = yup.object({
    amount: yup
        .number()
        .required("Amount is required"),
    recipient: yup
        .string()
        .matches(/^0x[a-fA-F0-9]{40}$/, "Invalid ETH Address")
        .required(
            "Recipient is required"
        ),
})

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
        setIsWaitingOnTransaction,
    ] = useState(false)
    const [
        ethScanLink,
        setEthScanLink,
    ] = useState<string | null>(null)

    const transForm = useFormik({
        initialValues: {
            amount: "",
            recipient: "",
        },
        validationSchema:
            validationSchema,
        onSubmit: (values) => {
            if (
                selectedToken &&
                selectedToken.transfer
            ) {
                setIsWaitingOnTransaction(
                    true
                )
                selectedToken
                    .transfer(
                        values.recipient,
                        ethers.utils.parseEther(
                            values.amount
                        )
                    )
                    .then((res) => {
                        setEthScanLink(
                            `https://ropsten.etherscan.io/tx/${res.hash}`
                        )
                        res.wait().then(
                            (value) => {
                                transForm.resetForm();
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
                    })
                    .catch((err) => {
                        setIsWaitingOnTransaction(
                            false
                        )
                        console.log(
                            `${err.message}`
                        )
                    })
            }
        },
        validate: (values) => {
            let error = {};
            if (selectedToken && +values.amount > selectedToken.balance) {
                return { amount: "Insufficient balance."};
            }
            return error;
        }
    })

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

    return token ? (
        <div className={classes.root}>
            <form
                onSubmit={
                    transForm.handleSubmit
                }
            >
                <div
                    className={
                        classes.inputBox
                    }
                >
                    <TextField
                        helperText={
                            transForm
                                .touched
                                .amount &&
                            transForm
                                .errors
                                .amount
                        }
                        label={`Enter ${
                            selectedToken
                                ? selectedToken.symbol
                                : ""
                        } amount`}
                        value={
                            transForm
                                .values
                                .amount
                        }
                        onChange={
                            transForm.handleChange
                        }
                        error={
                            transForm
                                .touched
                                .amount &&
                            Boolean(
                                transForm
                                    .errors
                                    .amount
                            )
                        }
                        placeholder={
                            "Enter Amount"
                        }
                        className={
                            classes.input
                        }
                        variant="filled"
                        name="amount"
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
                            transForm
                                .touched
                                .recipient &&
                            transForm
                                .errors
                                .recipient
                        }
                        label={`Enter Recipient Address`}
                        name="recipient"
                        value={
                            transForm
                                .values
                                .recipient
                        }
                        onChange={
                            transForm.handleChange
                        }
                        error={
                            transForm
                                .touched
                                .recipient &&
                            Boolean(
                                transForm
                                    .errors
                                    .recipient
                            )
                        }
                        className={
                            classes.input
                        }
                        variant="filled"
                    />

                    <div
                        className={
                            classes.btnBox
                        }
                    >
                        <Button
                            type="submit"
                            className={
                                classes.myBtn
                            }
                            variant="contained"
                            color="primary"
                            disabled={isWaitingOnTransaction}
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
            </form>
        </div>
    ) : (
        <Redirect to="/?token=ETH" />
    )
}
