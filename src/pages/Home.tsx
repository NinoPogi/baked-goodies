import { HStack, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import CakeCarousel from "../components/HomePage/CakeCarousel";
import CakePricing from "../components/HomePage/CakePricing";
import pickup from "../images/pickup.jpg";

const CakePortfolio = () => {
  return (
    <VStack spacing="60px">
      <CakeCarousel />

      <Heading>ORDERING PROCESS GUIDE</Heading>
      <HStack spacing="30px">
        <Stack>
          <Heading fontSize="3xl">Step 1</Heading>
          <Heading fontSize="3xl">Choose Cake</Heading>
        </Stack>
        <Stack>
          <Heading fontSize="3xl">Step 2</Heading>
          <Heading fontSize="3xl">Choose Date & Check out</Heading>
        </Stack>
        <Stack>
          <Heading fontSize="3xl">Step 3</Heading>
          <Heading fontSize="3xl">Design You Cake</Heading>
        </Stack>
        <Stack>
          <Heading fontSize="3xl">Step 4</Heading>
          <Heading fontSize="3xl">Pick Up Cake</Heading>
        </Stack>
      </HStack>
      <Heading>PRE ORDERS ONLY</Heading>
      <HStack spacing="30px" justify="space-evenly">
        <Stack>
          <Heading fontSize="3xl">Full Address Here</Heading>
          <Heading fontSize="3xl">Arayat, Pampanga</Heading>
        </Stack>
        <Image src={pickup} w="35%" />
      </HStack>

      <Text>Pickup Location</Text>
    </VStack>
  );
};

export default CakePortfolio;
