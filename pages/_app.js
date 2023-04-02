import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from 'react'; 
import { ethers } from 'ethers';
import contractABI from '../your_contract_abi.json'; // Replace with the actual ABI file

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ethereum";

const registerCompany = async (companyData, provider) => {
  try {
    const signer = provider.getSigner();
    const contract = new ethers.Contract('0x2902e35156fbf1e7d3d72edd5fc64b32410cdd51', contractABI, signer);

    const transaction = await contract.registerCompany(
      companyData.name,
      companyData.website,
      companyData.planName,
      companyData.subscriptionAmount,
      companyData.timePeriod,
      companyData.walletAddress,
      companyData.description,
      companyData.imageUrl
    );

    console.log('Transaction sent:', transaction.hash);
    await transaction.wait();
    console.log('Transaction completed');
  } catch (error) {
    console.error('Error registering company', error);
  }
};

function MyApp({ Component, pageProps }) {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3Provider);
    }
  }, []);

  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider>
        <Component {...pageProps} registerCompany={(companyData) => registerCompany(companyData, provider)} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
