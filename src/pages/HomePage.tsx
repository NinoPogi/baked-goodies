import { useEffect } from "react";
import { Heading, Image, Stack, VStack } from "@chakra-ui/react";

import CakeCarousel from "../components/HomePage/CakeCarousel";
import CakeBrowse from "../components/HomePage/CakeBrowse";
import getCroppedImageUrl from "../services/image-url";

const HomePage = () => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);

  return (
    <VStack spacing={10}>
      <CakeCarousel />

      <Heading fontSize="2xl">BROWSE CAKES</Heading>
      {/* <CakeBrowse /> */}

      <Heading fontSize="2xl">ORDERING PROCESS GUIDE | PRE ORDERS ONLY</Heading>

      <Stack
        justify="space-evenly"
        spacing={{ base: 4, xl: 8 }}
        direction={{ base: "column", xl: "row" }}
      >
        <VStack
          alignItems="flex-start"
          bgGradient="linear(to-r, #ff94c2, #ff6c9d)"
          borderRadius="20px"
          p="20px"
          color="white"
        >
          <Stack>
            <Heading fontSize="1xl">Step 1</Heading>
            <Heading fontSize="1xl">Place Cake Order</Heading>
          </Stack>

          <Stack>
            <Heading fontSize="1xl">Step 2</Heading>
            <Heading fontSize="1xl">Wait For Acceptance</Heading>
          </Stack>

          <Stack>
            <Heading fontSize="1xl">Step 3</Heading>
            <Heading fontSize="1xl">Pay Your Cake</Heading>
          </Stack>

          <Stack>
            <Heading fontSize="1xl">Step 4</Heading>
            <Heading fontSize="1xl">Wait For Your Cake</Heading>
          </Stack>

          <Stack>
            <Heading fontSize="1xl">Step 5</Heading>
            <Heading fontSize="1xl">Pick Up Cake</Heading>
          </Stack>
        </VStack>

        <VStack>
          <Heading fontSize="1xl">Arayat, Pampanga</Heading>

          <Image
            srcSet={getCroppedImageUrl(
              "https://res.cloudinary.com/dzobqin7p/image/upload/v1683104676/banners/pickup_on6jq4.jpg"
            )}
            boxSize="400px"
            borderRadius="20px"
          />
        </VStack>
      </Stack>
    </VStack>
  );
};

export default HomePage;
