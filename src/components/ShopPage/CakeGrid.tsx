import { SimpleGrid, Spinner } from "@chakra-ui/react";
import useCakes from "../../hooks/useCakes";
import CakeCard from "./CakeCard";
import CakeCardSkeleton from "./CakeCardSkeleton";

const CakeGrid = () => {
  const { data } = useCakes();

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="2px">
      {data.map((cake) => (
        <CakeCard
          key={cake._id.$oid}
          route={cake.route}
          image={cake.images[0]}
          pricing={cake.pricing}
          boxSize={{ base: "210px" }}
        >
          {cake.title}
        </CakeCard>
      ))}
    </SimpleGrid>
  );
};

export default CakeGrid;
