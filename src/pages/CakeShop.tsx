import { SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CakeCard from "../components/CakesShop/CakeCard";
import CakeFilter from "../components/CakesShop/CakeFilter";
import api from "../services/api-client";

const CakeAll = () => {
  const [cakes, setCakes] = useState([
    { route: "", images: [], title: "", pricing: "" },
  ]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    document.title = "Cakes | Baked Goodies by H";
    api
      .get(`/cake${sort}`)
      .then((res) => setCakes(res.data))
      .catch((err) => alert(err));
  }, [sort]);

  const handleSort = (event: string) => {
    setSort(event);
  };

  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <CakeFilter onChange={handleSort} />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="30px">
        {cakes.map((cake) => (
          <CakeCard
            route={cake.route}
            image={cake.images[0]}
            pricing={cake.pricing}
          >
            {cake.title}
          </CakeCard>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default CakeAll;
