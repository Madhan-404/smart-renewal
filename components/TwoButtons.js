import { Box, Button, HStack, SimpleGrid,Link,Flex,chakra,Stack} from "@chakra-ui/react";
import { useRouter } from "next/router";
// import MainComponent from "./MainComponent";
import MainComponent from "../components/MainComponent";
import {} from "@thirdweb-dev/react"

const TwoButtons = () => {
  const router = useRouter();

  const handleCompanyClick = () => {
    router.push("/company");
  };

  const handleCustomerClick = () => {
    router.push("/customer");
  };

  return (
    // <SimpleGrid minChildWidth='120px' spacing='40px'>
    //     <Box height='80px'width={40}>
    //   <Button
    //     onClick={handleCompanyClick}
    //     colorScheme="blue"
    //     size="lg"
    //     marginRight={4}
    //   >
    //     Enter as Company
    //   </Button>
    //   <Box height='80px'>
    //   <Button
    //     onClick={handleCustomerClick}
    //     colorScheme="green"
    //     size="lg"
    //   >
    //     Enter as Customer
    //   </Button>
    //   </Box>
    //   </Box>
    // </SimpleGrid>
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
  <Flex
    justify="center"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    w="full"
  >
    <Box
      w={{
        base: "full",
        md: "75%",
        lg: "50%",
      }}
      px={4}
      py={20}
      textAlign={{
        base: "left",
        md: "center",
      }}
    >
      <chakra.span
        fontSize={{
          base: "3xl",
          sm: "4xl",
        }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
        mb={6}
      >
        <chakra.span display="block">Ready to dive in?</chakra.span>
        <chakra.span
          display="block"
          color="brand.600"
          _dark={{
            color: "gray.500",
          }}
        >
          Start your free trial today.
        </chakra.span>
      </chakra.span>
      <Stack
        justifyContent={{
          base: "left",
          md: "center",
        }}
        direction={{
          base: "column",
          sm: "row",
        }}
        spacing={2}
        mt={2}
      >
        <Box display="inline-flex" rounded="md" shadow="md">
        {/* <Button
        onClick={handleCompanyClick}
        colorScheme="blue"
        size="lg"
        marginRight={4}
      >
        Enter as Company
      </Button> */}
          
        </Box>
        <Box ml={3} display="inline-flex" rounded="md" shadow="md">
          <MainComponent />
        {/* <Button
        onClick={handleCustomerClick}
        colorScheme="blue"
        size="lg"
        marginRight={4}
      >
        Enter as a Customer
      </Button> */}
        </Box>
      </Stack>
    </Box>
  </Flex>
</Flex>
  );
};

export default TwoButtons;
