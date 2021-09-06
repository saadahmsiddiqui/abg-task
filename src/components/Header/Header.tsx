import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../Web3/connector';
import { useTokensContext } from '../../Web3/Erc20Context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function shortenAddr(addr: string) {
  return addr.substring(0,3) + "..." + addr.substring(addr.length-3,addr.length)
}

export default function Header() {
  const classes = useStyles();

  const { activate, account } = useWeb3React()
  const { selectedToken } = useTokensContext();

  const onError = (err: any) => {
    console.error(err)
  }
  
  const activateWeb3 = () => {
    activate(injected, onError, true).catch(err => {
      alert(err.message)
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            deFi App
          </Typography>
          { !account ? <Button  onClick={() => activateWeb3()} color="inherit">Connect Wallet</Button> : 
            shortenAddr(account)
          }
          <br />
          { selectedToken ? `${selectedToken.balance} ${selectedToken.symbol}` : null }
        </Toolbar>
      </AppBar>
    </div>
  );
}