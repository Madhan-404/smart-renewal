/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Company Registration
      </Heading>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Company's name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>
      <div></div>
      <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontWeight={'normal'}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
  <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
    Company Subscription Details
  </Heading>
  <FormControl as={GridItem} colSpan={[6, 3]}>
    <FormLabel
      htmlFor="plan_name"
      fontSize="sm"
      fontWeight="md"
      color="gray.700"
      _dark={{
        color: 'gray.50',
      }}>
      Plan Name
    </FormLabel>
    <Input
      type="text"
      name="plan_name"
      id="plan_name"
      autoComplete="plan-name"
      focusBorderColor="brand.400"
      shadow="sm"
      size="sm"
      w="full"
      rounded="md"
    />
  </FormControl>

  <FormControl as={GridItem} colSpan={[6, 3]}>
    <FormLabel
      htmlFor="subscription_amount"
      fontSize="sm"
      fontWeight="md"
      color="gray.700"
      _dark={{
        color: 'gray.50',
      }}>
      Subscription Amount (in ETH)
    </FormLabel>
    <Input
      type="number"
      name="subscription_amount"
      id="subscription_amount"
      autoComplete="subscription-amount"
      focusBorderColor="brand.400"
      shadow="sm"
      size="sm"
      w="full"
      rounded="md"
    />
  </FormControl>

  <FormControl as={GridItem} colSpan={[6, 3]}>
    <FormLabel
      htmlFor="time_period"
      fontSize="sm"
      fontWeight="md"
      color="gray.700"
      _dark={{
        color: 'gray.50',
      }}>
      Time Period (in days)
    </FormLabel>
    <Input
      type="number"
      name="time_period"
      id="time_period"
      autoComplete="time-period"
      focusBorderColor="brand.400"
      shadow="sm"
      size="sm"
      w="full"
      rounded="md"
    />
  </FormControl>

  <FormControl as={GridItem} colSpan={[6, 6]}>
    <FormLabel
      htmlFor="wallet_address"
      fontSize="sm"
      fontWeight="md"
      color="gray.700"
      _dark={{
        color: 'gray.50',
      }}
      mt="2%">
      Wallet Address
    </FormLabel>
    <Input
      type="text"
      name="wallet_address"
      id="wallet_address"
      autoComplete="wallet-address"
      focusBorderColor="brand.400"
      shadow="sm"
      size="sm"
      w="full"
      rounded="md"
    />
  </FormControl>

  <FormControl as={GridItem} colSpan={6}>
    <FormLabel
      htmlFor="description"
      fontSize="sm"
      fontWeight="md"
      color="gray.700"
      _dark={{
        color: 'gray.50',
      }}
      mt="2%">
      Description
    </FormLabel>
    <Textarea
      name="description"
      id="description"
      autoComplete="description"
      focusBorderColor="brand.400"
      shadow="sm"
      size="sm"
      w="full"
      rounded="md"
    />
  </FormControl>

  <FormControl as={GridItem} colSpan={6}>
    <FormLabel
      htmlFor="image"
      fontSize="sm"
      fontWeight="md"
      color="gray.700"
      _dark={{
        color: 'gray.50',
      }}
      mt="2%">
      Company Logo/Image URL
    </FormLabel>
    <Input
      type="text"
      name="image"
      id="image"
      autoComplete="image"
      focusBorderColor="brand.400"
      shadow="sm"
      size="sm"
      w="full"
      rounded="md"
    />
</FormControl>
</>    
  );
};

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Billing Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
      <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Name
          </FormLabel>
          <Input id="first-name" placeholder="Full Name" />
        </FormControl>
      <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            E-mail Address
          </FormLabel>
          <Input id="e-mail" placeholder="To contact" />
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Billing Address
          </FormLabel>
          <Textarea
            placeholder="Location Address"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function multistep() {
  const toast = useToast();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account creation Successful.',
                    description: "We've automated the subscriptions for you :).",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}