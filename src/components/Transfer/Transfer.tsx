import { Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useTokensContext } from "../../Web3/Erc20Context";


const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    inputBox: {
        maxWidth: '500px'
    },
    input: {
        display: "block"
    }
  }));


export default function Transfer() {
    const classes = useStyles();
    const { tokens } = useTokensContext();

    const [disableSend, setDisableSend] = useState(false);
    const [hideViewEtherScan, setHideViewEtherScan] = useState(false);

    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');

    console.log(tokens)
    console.log(token)
    return (
        <div className={classes.root}>
            <div className={classes.inputBox}>
                
                <Input placeholder={"Enter Amount"} className={classes.input}/>
                <Input placeholder={"Enter Recipient Address"} className={classes.input}/>

                <div>
                    <Button disabled={disableSend}>Send</Button>
                    <Button>View On Etherscan</Button>
                </div>
            </div>
        </div>
    );
}