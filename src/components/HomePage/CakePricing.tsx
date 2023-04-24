import { Card, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import pricing from "../../data/pricing";

const CakePricing = () => {
  return (
    <>
      <Heading>PRICING</Heading>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="6px">
        {pricing.map((image) => (
          <Card
            borderRadius="20px"
            overflow="hidden"
            variant="unstyled"
            mb="40px"
          >
            <Image src={image} boxSize="300px" />
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CakePricing;
