import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";

const AmazonPrimeCard = () => {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="xs"
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <Text
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            Amazon Prime
          </Text>
          <Text
            mt={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            Unlimited streaming of movies, TV shows, and music, plus free
            delivery on millions of items.
          </Text>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src="https://images.unsplash.com/photo-1526976665263-8a2ab1f9b6c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
          alt="Amazon Prime"
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <Text color="white" fontWeight="bold" fontSize="lg">
            $12.99/mo
          </Text>
          <Button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
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
            Subscribe
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AmazonPrimeCard;
