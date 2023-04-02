import { Heading } from "@chakra-ui/react";
import { ethers } from "ethers";
import Web3 from "web3";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Company() {
  return (
    <div>
      <Heading as="h1" size="2xl">
        Company Landing Page
      </Heading>
    </div>
  );
}
