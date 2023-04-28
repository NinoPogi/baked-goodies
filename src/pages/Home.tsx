import { useEffect } from "react";
import { Box, HStack, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import CakeCarousel from "../components/HomePage/CakeCarousel";
import CakePricing from "../components/HomePage/CakePricing";
import pickup from "../images/pickup.jpg";
import CakeRecommend from "../components/CakePage/CakeRecommend";

const CakeHome = () => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);

  return (
    <VStack spacing="60px">
      <CakeCarousel />
      <Heading fontSize="2xl">BROWSE CAKE</Heading>

      <CakeRecommend cakeType="" />

      <Heading fontSize="2xl">ORDERING PROCESS GUIDE</Heading>
      <HStack justify="space-evenly">
        <Stack>
          <Heading fontSize="1xl">Step 1</Heading>
          <Heading fontSize="1xl">Choose Cake</Heading>
        </Stack>
        <Stack>
          <Heading fontSize="1xl">Step 2</Heading>
          <Heading fontSize="1xl">Choose Promise Date</Heading>
        </Stack>
        <Stack>
          <Heading fontSize="1xl">Step 3</Heading>
          <Heading fontSize="1xl">Design Your Cake</Heading>
        </Stack>
        <Stack>
          <Heading fontSize="1xl">Step 4</Heading>
          <Heading fontSize="1xl">Pick Up Cake</Heading>
        </Stack>
      </HStack>
      <Heading fontSize="2xl">PRE ORDERS ONLY</Heading>
      <HStack justify="space-evenly">
        <Stack>
          <Heading fontSize="1xl">Full Address Here</Heading>
          <Heading fontSize="1xl">Arayat, Pampanga</Heading>
        </Stack>
        <Image src={pickup} w="35%" />
      </HStack>
      {/* <CakePricing /> */}
    </VStack>
  );
};

export default CakeHome;
