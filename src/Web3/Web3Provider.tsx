import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'

const ETHERS_POLLING_INTERVAL = 1000

const getLibrary = (provider: any): any => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = ETHERS_POLLING_INTERVAL
  return library
}

interface Web3ProviderProps {
  children: React.ReactNode
}

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  )
}

export default Web3Provider
