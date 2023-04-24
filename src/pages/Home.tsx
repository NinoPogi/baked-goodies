import { Text, VStack } from "@chakra-ui/react";
import CakeCarousel from "../components/HomePage/CakeCarousel";
import CakePricing from "../components/HomePage/CakePricing";

const CakePortfolio = () => {
  return (
    <VStack spacing="60px">
      <CakeCarousel />
      <CakePricing />
      <Text>Pickup Location</Text>
    </VStack>
  );
};

export default CakePortfolio;
