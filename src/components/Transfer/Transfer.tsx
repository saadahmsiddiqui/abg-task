import {
    Button,
    Input,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import {
    useEffect,
    useState,
} from "react"
import { useTokensContext } from "../../Web3/Erc20Context"
import { Redirect, useLocation } from "react-router-dom"
import { useQuery } from "../../utils/useQuery"
import { useWeb3React } from "@web3-react/core"
import { BigNumber } from "@ethersproject/bignumber"
import { ethers } from "ethers"

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
        },
        btnBox: {
            display: "flex",
            flexDirection: "column",
        },
    })
)

export default function Transfer() {
    const token =
        useQuery().get("token");

    const classes = useStyles()
    const { active } = useWeb3React()
    const {
        tokens,
        selectedToken,
        setSelectedToken,
    } = useTokensContext()

    const [
        disableSend,
        setDisableSend,
    ] = useState(false)
    const [
        ethScanLink,
        setEthScanLink,
    ] = useState<string | null>(null)
    const [recipient, setRecipient] =
        useState("")
    const [amount, setAmount] =
        useState("")

    useEffect(() => {
        if (active && tokens) {
            let all =
                Object.keys(tokens)

            all.map((addr, index) => {
                if (
                    tokens[addr]
                        .name === token
                ) {
                    setSelectedToken(
                        tokens[addr]
                    )
                }
            })
        }
    }, [active, tokens])

    return (
        token ? <div className={classes.root}>
        <div
            className={
                classes.inputBox
            }
        >
            <Input
                value={amount}
                onChange={(evt) =>
                    setAmount(
                        evt.target
                            .value
                    )
                }
                placeholder={
                    "Enter Amount"
                }
                className={
                    classes.input
                }
            />
            <Input
                placeholder={
                    "Enter Recipient Address"
                }
                value={recipient}
                className={
                    classes.input
                }
                onChange={
                    evt => {
                            setRecipient(evt.target.value)
                        }
                }
            />
            {/* validator /^0x[a-fA-F0-9]{40}$/ */}

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
                            setDisableSend(true);
                            selectedToken.transfer(
                                recipient,
                                ethers.utils.parseEther(amount)
                            ).then(res => {
                                setEthScanLink(`https://ropsten.etherscan.io/tx/${res.hash}`);
                                setDisableSend(false);
                                console.log(res);
                            }).catch(err => {
                                setDisableSend(false);
                                console.log(`${err.message}`)
                            })
                        }
                    }}
                    className={
                        classes.myBtn
                    }
                    disabled={
                        disableSend
                    }
                >
                    Send
                </Button>
                {
                    ethScanLink ? <Button target="_blank" className={classes.myBtn} href={ethScanLink} >View on Etherscan</Button> : null
                }
            </div>
        </div>
    </div> : <Redirect to="/?token=ETH" />
    )
}
