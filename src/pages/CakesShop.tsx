import { SimpleGrid, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CakeCard from "../components/CakesShop/CakeCard";
import CakeFilter from "../components/CakesShop/CakeFilter";
import api from "../services/api-client";

const CakeAll = () => {
  const [cakes, setCakes] = useState([
    { route: "", image: "", title: "", pricing: "" },
  ]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function apiCall() {
      const response = await api.get(`/cake${sort}`);
      setCakes(response.data);
    }
    document.title = "Cakes | Baked Goodies by H";
    apiCall();
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
            image={cake.image}
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
