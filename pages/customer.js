import { VStack, Heading } from "@chakra-ui/react";
import NetflixSubscription from "../components/NetflixSubscription";
import AmazonPrimeCard from "../components/AmazonPrimeCard";

export default function Company() {
  return (
    <div>
      <Heading as="h1" size="2xl">
        <VStack>
        <NetflixSubscription />
        <AmazonPrimeCard />
        </VStack>
      </Heading>
    </div>
  );
}
