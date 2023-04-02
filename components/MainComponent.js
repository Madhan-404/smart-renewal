import { useState } from "react";
import { ChakraProvider, Button, Box, VStack } from "@chakra-ui/react";
import ConnectWalletModal from "./ConnectWalletModal";
import { useRouter } from "next/router";

export default function MainComponent() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleWalletConnect = () => {
    setIsWalletConnected(true);
    setShowModal(false);
  };

  const handleClick = (route) => {
    if (isWalletConnected) {
      router.push(route);
    } else {
      setShowModal(true);
    }
  };

  return (
    <ChakraProvider>
      <Box>
        <VStack spacing={4}>
          <Button colorScheme="blue" onClick={() => handleClick("/company")}>
            Enter as Company
          </Button>
          <Button colorScheme="green" onClick={() => handleClick("/customer")}>
            Enter as Customer
          </Button>
        </VStack>
        <ConnectWalletModal isOpen={showModal} onClose={() => setShowModal(false)} onConnect={handleWalletConnect} />
      </Box>
    </ChakraProvider>
  );
}
