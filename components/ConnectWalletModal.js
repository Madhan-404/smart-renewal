import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function ConnectWalletModal({ isOpen, onClose, onConnect }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Connect Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Please connect your wallet to continue.</p>
        </ModalBody>
        <ModalFooter>
          <ConnectWallet
            colorScheme="blue"
            mr={3}
            onSuccess={onConnect}
          />
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
