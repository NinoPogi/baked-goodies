import { Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import CakeCard from "../components/CakePage/CakeCard";
import CakeFilter from "../components/CakePage/CakeFilter";
import cakes from "../data/cakes";

const CakeAll = () => {
  useEffect(() => {
    document.title = "Cakes | Baked Goodies by H";
  }, []);
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <CakeFilter />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="30px">
        {cakes.map((cake) => (
          <CakeCard route={cake.route} image={cake.image}>
            {cake.title}
          </CakeCard>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default CakeAll;
