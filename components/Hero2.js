import { Box, Heading, Text } from "@chakra-ui/react";

export default function Hero2() {
  return (
    <Box
      mt={10}
      bg="linear-gradient(135deg, rgba(72, 85, 99, 0.8) 0%, rgba(41, 50, 60, 0.8) 100%)"
      backdropFilter="blur(10px)"
      borderRadius="xl"
      p={10}
    >
      <Heading as="h1" size="2xl" mb={4} color="white">
        Why Choose SmartRenewal?
      </Heading>
      <Text fontSize="lg" color="white" lineHeight="tall">
        Our platform uses advanced blockchain technology to automate and secure subscription renewals, saving time and resources for both companies and customers.
      </Text>
    </Box>
  );
}
