import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Link,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  useBoolean,
} from "@chakra-ui/react";

import CakeCard from "../components/CakeCard";
import apiClient from "../services/api-client";

const CakeShop = () => {
  const [open, setOpen] = useBoolean();
  const [cakes, setCakes] = useState([
    { _id: "", route: "", images: [], title: "", pricing: "" },
  ]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    document.title = "Cakes | Baked Goodies by H";
    apiClient
      .get(`/cake${sort}`)
      .then((res) => setCakes(res.data))
      .catch((err) => alert(err));
  }, [sort]);

  const handleSort = (event: string) => {
    setSort(event);
  };

  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Box
        pos="fixed"
        zIndex="1"
        bgColor="teal.300"
        borderRadius="20px"
        p="10px"
      >
        <Link display={{ base: "inline", md: "none" }} onClick={setOpen.toggle}>
          <Heading fontSize="xl">filter & sort</Heading>
        </Link>
        <Box display={{ base: open ? "block" : "none", md: "block" }}>
          <Heading fontSize="xl">CAKE TYPE</Heading>
          <RadioGroup defaultValue="" onChange={handleSort}>
            <Stack spacing="20px">
              <Radio colorScheme="pink" value="">
                All Cakes
              </Radio>
              <Radio colorScheme="pink" value="?sort=cupcake">
                Cupcakes
              </Radio>
              <Radio colorScheme="pink" value="?sort=bento">
                Bento Cakes
              </Radio>
              <Radio colorScheme="pink" value="?sort=tier">
                Tier Cakes
              </Radio>
              <Radio colorScheme="pink" value="?sort=custom">
                Custom Cakes
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        p={{ base: "42px 0 0 0", md: "0 0 0 170px" }}
        spacing="30px"
      >
        {cakes.map((cake) => (
          <CakeCard
            key={cake._id}
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

export default CakeShop;
