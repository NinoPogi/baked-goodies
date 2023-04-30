import { Stack } from "@chakra-ui/react";
import cakes from "../../data/cakes";
import CakeCard from "../ShopPage/CakeCard";

const CakeGrid = () => {
  const skeletons = [1, 2, 3, 4];

  return (
    <Stack
      h="md"
      overflow="auto"
      w={{
        sm: 280,
        md: 380,
        lg: 704,
        xl: 960,
        "2xl": 1376,
        "3xl": 1800,
      }}
    >
      <Stack spacing="10px" direction="row">
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
      </Stack>
    </Stack>
  );
};

export default CakeGrid;
