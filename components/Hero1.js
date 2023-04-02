import React from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { PhoneIcon, AddIcon } from '@chakra-ui/icons';
import { FaBitcoin } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { ImLoop } from "react-icons/im";

const Feature = ({ title, text, icon, bgColor }) => {
  return (
    <Stack
      spacing={3}
      bg={bgColor}
      borderRadius="md"
      p={6}
      boxShadow="lg"
      _hover={{ transform: "scale(1.02)" }}
      transition="all 0.3s"
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={bgColor}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} fontSize="20px" color="black" as="b">
        {title}
      </Text>
      <Text fontSize="lg" color={'black'}>
        {text}
      </Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          bgColor="blue.500"
          icon={<Icon as={FaBitcoin} w={10} h={10} />}
          title="Blockchain-based subscription management"
          text="Say goodbye to subscription headaches with our blockchain-powered service - secure, transparent, and hassle-free!"
        />
        <Feature
          bgColor="green.500"
          icon={<Icon as={ImLoop} w={10} h={10} />}
          title="Automatic Renewals"
          text="Keep your subscriptions active without lifting a finger! Our automatic renewal system ensures you never miss out on the content you love"
        />
        <Feature
          bgColor="purple.500"
          icon={<Icon as={GiMoneyStack} w={10} h={10} />}
          title="Decentralized Payments"
          text="Upgrade your subscription game with crypto! Our blockchain-based service lets you pay effortlessly and securely with your favorite cryptocurrencies."
        />
      </SimpleGrid>
    </Box>
  );
}
