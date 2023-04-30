import { Stack } from "@chakra-ui/react";
import CakeCard from "../ShopPage/CakeCard";
import useCakes from "../../hooks/useCakes";

const CakeGrid = () => {
  const { data, isLoading, error } = useCakes();

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
        {data.map((cake) => (
          <CakeCard
            key={cake._id.$oid}
            route={cake.route}
            image={cake.images[0]}
            pricing={cake.pricing}
            boxSize={{ sm: "15em", md: "21em", lg: "17em", "2xl": "20em" }}
          >
            {cake.title}
          </CakeCard>
        ))}
      </Stack>
    </Stack>
  );
};

export default CakeGrid;
