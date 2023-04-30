import { useEffect } from "react";
import { Heading, Image, Stack, VStack } from "@chakra-ui/react";
import pickup from "../images/pickup.jpg";
import CakeCarousel from "../components/HomePage/CakeCarousel";
import CakeBrowse from "../components/HomePage/CakeBrowse";

const HomePage = () => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);

  return (
    <VStack spacing="20px">
      <CakeCarousel />
      <Heading fontSize="2xl">Browse Cakes ={">"}</Heading>
      <CakeBrowse />
      <Heading fontSize="2xl">ORDERING PROCESS GUIDE</Heading>
      <Stack justify="space-evenly" direction={{ base: "column", lg: "row" }}>
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
      </Stack>
      <Heading fontSize="2xl">PRE ORDERS ONLY</Heading>
      <Heading fontSize="1xl">Arayat, Pampanga</Heading>
      <Image src={pickup} w="55%" />
    </VStack>
  );
};

export default HomePage;
