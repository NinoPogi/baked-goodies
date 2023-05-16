import { useEffect } from "react";
import { Heading, Text, Image, Stack, VStack } from "@chakra-ui/react";
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

      <CakeBrowse />

      <Text fontSize="2xl">ORDERING PROCESS GUIDE | PRE ORDERS ONLY</Text>

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
            <Text fontSize="1xl">Step 1</Text>
            <Text fontSize="1xl">Place Cake Order</Text>
          </Stack>

          <Stack>
            <Text fontSize="1xl">Step 2</Text>
            <Text fontSize="1xl">Wait For Acceptance</Text>
          </Stack>

          <Stack>
            <Text fontSize="1xl">Step 3</Text>
            <Text fontSize="1xl">Pay Your Cake</Text>
          </Stack>

          <Stack>
            <Text fontSize="1xl">Step 4</Text>
            <Text fontSize="1xl">Wait For Your Cake</Text>
          </Stack>

          <Stack>
            <Text fontSize="1xl">Step 5</Text>
            <Text fontSize="1xl">Pick Up Cake</Text>
          </Stack>
        </VStack>

        <VStack>
          <Text fontSize="1xl">Contact Number: 09276863682</Text>
          <Text fontSize="1xl">27 Alcala St. Poblacion, Arayat, Pampanga</Text>

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
