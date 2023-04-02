import React from "react";
import { Flex, Box, chakra, Image } from "@chakra-ui/react";
import netflix from "../assets/netflix.jpg";

function NetflixSubscription() {
  return (
    <Flex
      bg="#f5f5f5"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="xs"
        mx="auto"
        bg="white"
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color="red.600"
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            Netflix
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color="gray.600"
          >
            Renew your monthly subscription now and enjoy unlimited movies and TV shows.
          </chakra.p>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          Image={netflix}
          alt="Netflix Subscription"
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="red.600"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            $12.99/month
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="red.600"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
          >
            Renew Now
          </chakra.button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default NetflixSubscription;