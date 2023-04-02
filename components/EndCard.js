import { Box, Text } from "@chakra-ui/react";

export default function EndCard() {
  return (
    <Box bg="gray.900" p={4} borderRadius="xl" mt={10}>
      <Text fontSize="md" color="white" textAlign="center">
        &copy; {new Date().getFullYear()} SmartRenewal. All rights reserved.
      </Text>
    </Box>
  );
}
