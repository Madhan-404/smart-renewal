/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { useState } from 'react';
// import {
//   Progress,
//   Box,
//   ButtonGroup,
//   Button,
//   Heading,
//   Flex,
//   FormControl,
//   GridItem,
//   FormLabel,
//   Input,
//   Select,
//   SimpleGrid,
//   InputLeftAddon,
//   InputGroup,
//   Textarea,
//   FormHelperText,
//   InputRightElement,
// } from '@chakra-ui/react';

// import Web3 from 'web3';
// import { useEffect } from 'react';


// import { useToast } from '@chakra-ui/react';


// const [web3, setWeb3] = useState(null);
// const [account, setAccount] = useState(null);
// const [contract, setContract] = useState(null);

// useEffect(() => {
//   async function initializeWeb3() {
//     if (window.ethereum) {
//       const web3Instance = new Web3(window.ethereum);
//       const accounts = await web3Instance.eth.getAccounts();
//       const contractInstance = new web3Instance.eth.Contract(abi, contractAddress);
//       setWeb3(web3Instance);
//       setAccount(accounts[0]);
//       setContract(contractInstance);
//     } else {
//       toast({
//         title: 'MetaMask not detected',
//         description: 'Please install MetaMask to use this feature.',
//         status: 'warning',
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   }
//   initializeWeb3();
// }, []);


// const Form1 = () => {
//   const [show, setShow] = React.useState(false);
//   const handleClick = () => setShow(!show);
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
//         Company Registration
//       </Heading>
//         <FormControl mr="5%">
//           <FormLabel htmlFor="first-name" fontWeight={'normal'}>
//             Company's name
//           </FormLabel>
//           <Input id="first-name" placeholder="First name" />
//         </FormControl>
//       <div></div>
//       <FormControl as={GridItem} colSpan={[3, 2]}>
//           <FormLabel
//             fontWeight={'normal'}
//             color="gray.700"
//             _dark={{
//               color: 'gray.50',
//             }}>
//             Website
//           </FormLabel>
//           <InputGroup size="sm">
//             <InputLeftAddon
//               bg="gray.50"
//               _dark={{
//                 bg: 'gray.800',
//               }}
//               color="gray.500"
//               rounded="md">
//               http://
//             </InputLeftAddon>
//             <Input
//               type="tel"
//               placeholder="www.example.com"
//               focusBorderColor="brand.400"
//               rounded="md"
//             />
//           </InputGroup>
//         </FormControl>
//     </>
//   );
// };

// const Form2 = () => {
//   return (
//     <>
//   <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
//     Company Subscription Details
//   </Heading>
//   <FormControl as={GridItem} colSpan={[6, 3]}>
//     <FormLabel
//       htmlFor="plan_name"
//       fontSize="sm"
//       fontWeight="md"
//       color="gray.700"
//       _dark={{
//         color: 'gray.50',
//       }}>
//       Plan Name
//     </FormLabel>
//     <Input
//       type="text"
//       name="plan_name"
//       id="plan_name"
//       autoComplete="plan-name"
//       focusBorderColor="brand.400"
//       shadow="sm"
//       size="sm"
//       w="full"
//       rounded="md"
//     />
//   </FormControl>

//   <FormControl as={GridItem} colSpan={[6, 3]}>
//     <FormLabel
//       htmlFor="subscription_amount"
//       fontSize="sm"
//       fontWeight="md"
//       color="gray.700"
//       _dark={{
//         color: 'gray.50',
//       }}>
//       Subscription Amount (in ETH)
//     </FormLabel>
//     <Input
//       type="number"
//       name="subscription_amount"
//       id="subscription_amount"
//       autoComplete="subscription-amount"
//       focusBorderColor="brand.400"
//       shadow="sm"
//       size="sm"
//       w="full"
//       rounded="md"
//     />
//   </FormControl>

//   <FormControl as={GridItem} colSpan={[6, 3]}>
//     <FormLabel
//       htmlFor="time_period"
//       fontSize="sm"
//       fontWeight="md"
//       color="gray.700"
//       _dark={{
//         color: 'gray.50',
//       }}>
//       Time Period (in days)
//     </FormLabel>
//     <Input
//       type="number"
//       name="time_period"
//       id="time_period"
//       autoComplete="time-period"
//       focusBorderColor="brand.400"
//       shadow="sm"
//       size="sm"
//       w="full"
//       rounded="md"
//     />
//   </FormControl>

//   <FormControl as={GridItem} colSpan={[6, 6]}>
//     <FormLabel
//       htmlFor="wallet_address"
//       fontSize="sm"
//       fontWeight="md"
//       color="gray.700"
//       _dark={{
//         color: 'gray.50',
//       }}
//       mt="2%">
//       Wallet Address
//     </FormLabel>
//     <Input
//       type="text"
//       name="wallet_address"
//       id="wallet_address"
//       autoComplete="wallet-address"
//       focusBorderColor="brand.400"
//       shadow="sm"
//       size="sm"
//       w="full"
//       rounded="md"
//     />
//   </FormControl>

//   <FormControl as={GridItem} colSpan={6}>
//     <FormLabel
//       htmlFor="description"
//       fontSize="sm"
//       fontWeight="md"
//       color="gray.700"
//       _dark={{
//         color: 'gray.50',
//       }}
//       mt="2%">
//       Description
//     </FormLabel>
//     <Textarea
//       name="description"
//       id="description"
//       autoComplete="description"
//       focusBorderColor="brand.400"
//       shadow="sm"
//       size="sm"
//       w="full"
//       rounded="md"
//     />
//   </FormControl>

//   <FormControl as={GridItem} colSpan={6}>
//     <FormLabel
//       htmlFor="image"
//       fontSize="sm"
//       fontWeight="md"
//       color="gray.700"
//       _dark={{
//         color: 'gray.50',
//       }}
//       mt="2%">
//       Company Logo/Image URL
//     </FormLabel>
//     <Input
//       type="text"
//       name="image"
//       id="image"
//       autoComplete="image"
//       focusBorderColor="brand.400"
//       shadow="sm"
//       size="sm"
//       w="full"
//       rounded="md"
//     />
// </FormControl>
// </>    
//   );
// };

// const Form3 = () => {
//   return (
//     <>
//       <Heading w="100%" textAlign={'center'} fontWeight="normal">
//         Billing Details
//       </Heading>
//       <SimpleGrid columns={1} spacing={6}>
//       <FormControl mr="5%">
//           <FormLabel htmlFor="first-name" fontWeight={'normal'}>
//             Name
//           </FormLabel>
//           <Input id="first-name" placeholder="Full Name" />
//         </FormControl>
//       <FormControl mr="5%">
//           <FormLabel htmlFor="first-name" fontWeight={'normal'}>
//             E-mail Address
//           </FormLabel>
//           <Input id="e-mail" placeholder="To contact" />
//         </FormControl>

//         <FormControl id="email" mt={1}>
//           <FormLabel
//             fontSize="sm"
//             fontWeight="md"
//             color="gray.700"
//             _dark={{
//               color: 'gray.50',
//             }}>
//             Billing Address
//           </FormLabel>
//           <Textarea
//             placeholder="Location Address"
//             rows={3}
//             shadow="sm"
//             focusBorderColor="brand.400"
//             fontSize={{
//               sm: 'sm',
//             }}
//           />
//         </FormControl>
//       </SimpleGrid>
//     </>
//   );
// };

// export default function multistep() {
//   const toast = useToast();
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [step, setStep] = useState(1);
//   const [progress, setProgress] = useState(33.33);
//   return (
//     <>
//       <Box
//         borderWidth="1px"
//         rounded="lg"
//         shadow="1px 1px 3px rgba(0,0,0,0.3)"
//         maxWidth={800}
//         p={6}
//         m="10px auto"
//         as="form">
//         <Progress
//           hasStripe
//           value={progress}
//           mb="5%"
//           mx="5%"
//           isAnimated></Progress>
//         {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
//         <ButtonGroup mt="5%" w="100%">
//           <Flex w="100%" justifyContent="space-between">
//             <Flex>
//               <Button
//                 onClick={() => {
//                   setStep(step - 1);
//                   setProgress(progress - 33.33);
//                 }}
//                 isDisabled={step === 1}
//                 colorScheme="teal"
//                 variant="solid"
//                 w="7rem"
//                 mr="5%">
//                 Back
//               </Button>
//               <Button
//                 w="7rem"
//                 isDisabled={step === 3}
//                 onClick={() => {
//                   setStep(step + 1);
//                   if (step === 3) {
//                     setProgress(100);
//                   } else {
//                     setProgress(progress + 33.33);
//                   }
//                 }}
//                 colorScheme="teal"
//                 variant="outline">
//                 Next
//               </Button>
//             </Flex>
//             {step === 3 ? (
//               // <Button
//               //   w="7rem"
//               //   colorScheme="red"
//               //   variant="solid"
//               //   onClick={() => {
//               //     toast({
//               //       title: 'Account creation Successful.',
//               //       description: "We've automated the subscriptions for you :).",
//               //       status: 'success',
//               //       duration: 3000,
//               //       isClosable: true,
//               //     });
//               //   }}>
//               //   Submit
//               // </Button>

//               <Button
//   w="7rem"
//   colorScheme="red"
//   variant="solid"
//   onClick={submitForm}>
//   Submit
// </Button>

//             ) : null}
//           </Flex>
//         </ButtonGroup>
//       </Box>
//     </>
//   );
// }

import React, { useState } from 'react';
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  SimpleGrid,
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useToast } from '@chakra-ui/react';

const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_subscriptionAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_subscriptionPeriod",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "companyAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "website",
        "type": "string"
      }
    ],
    "name": "CompanyRegistered",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_website",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_planName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_subscriptionAmount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_walletAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_imageUrl",
        "type": "string"
      }
    ],
    "name": "registerCompany",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "companies",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "website",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "planName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "subscriptionAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timePeriod",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "walletAddress",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "imageUrl",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
  "inputs": [],
  "name": "subscriptionAmount",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "subscriptionPeriod",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "token",
  "outputs": [
  {
  "internalType": "contract IERC20",
  "name": "",
  "type": "address"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  }
  ];    

const contractAddress = '0x2902e35156fbf1e7d3d72edd5fc64b32410cdd51';

const Form = () => {
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [planName, setPlanName] = useState('');
  const [subscriptionAmount, setSubscriptionAmount] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const toast = useToast();

  const handleSubmit = async () => {
    if (
      companyName === '' ||
      website === '' ||
      planName === '' ||
      subscriptionAmount === '' ||
      timePeriod === '' ||
      walletAddress === '' ||
      description === '' ||
      imageUrl === ''
    ) {
      toast({
        title: 'Error',
        description: 'Please fill out all the fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (typeof window.ethereum === 'undefined') {
      toast({
        title: 'Error',
        description: 'MetaMask not detected. Please install MetaMask to continue.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const tx = await contract.registerCompany(
        companyName,
        website,
        planName,
        subscriptionAmount,
        walletAddress,
        description,
        imageUrl
      );

      await tx.wait();

      toast({
        title: 'Success',
        description: 'Company registration submitted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: 'An error occurred while submitting the company registration.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Company Registration
      </Heading>
      <FormControl mr="5%">
        <FormLabel htmlFor="company-name" fontWeight={'normal'}>
          Company's name
        </FormLabel>
        <Input
          id="company-name"
          placeholder="Company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </FormControl>
      <FormControl as={SimpleGrid} colSpan={[3, 2]}>
        <FormLabel
          fontWeight={'normal'}
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          >
            Website
          </FormLabel>
          <InputGroup>
            <InputLeftAddon children="http://" />
            <Input
              type="text"
              placeholder="yourdomain.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="plan-name" fontWeight={'normal'}>
            Subscription Plan Name
          </FormLabel>
          <Input
            id="plan-name"
            placeholder="Plan name"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="subscription-amount" fontWeight={'normal'}>
            Subscription Amount (ETH)
          </FormLabel>
          <Input
            id="subscription-amount"
            placeholder="0.0"
            type="number"
            step="0.0001"
            value={subscriptionAmount}
            onChange={(e) => setSubscriptionAmount(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="time-period" fontWeight={'normal'}>
            Subscription Time Period (days)
          </FormLabel>
          <Input
            id="time-period"
            placeholder="0"
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="wallet-address" fontWeight={'normal'}>
            Wallet Address
          </FormLabel>
          <Input
            id="wallet-address"
            placeholder="0x0000...0000"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description" fontWeight={'normal'}>
            Description
          </FormLabel>
          <Textarea
            id="description"
            placeholder="Enter a brief description of your company"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="image-url" fontWeight={'normal'}>
            Company Image URL
          </FormLabel>
          <Input
            id="image-url"
            placeholder="https://yourimageurl.com"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </FormControl>
        <Flex justifyContent="center" mt="5%">
          <ButtonGroup>
            <Button colorScheme="teal" onClick={handleSubmit}>
              Register
            </Button>
          </ButtonGroup>
        </Flex>
      </>
);
};

export default Form;      