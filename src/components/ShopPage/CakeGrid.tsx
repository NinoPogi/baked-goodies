import { SimpleGrid } from "@chakra-ui/react";
import cakes from "../../data/cakes";
import CakeCard from "./CakeCard";

const CakeGrid = () => {
  const skeletons = [1, 2, 3, 4];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="10px">
      {cakes.map((cake) => (
        <CakeCard
          key={cake._id.$oid}
          route={cake.route}
          image={cake.images[0]}
          pricing={cake.pricing}
        >
          {cake.title}
        </CakeCard>
      ))}
    </SimpleGrid>
  );
};

export default CakeGrid;
