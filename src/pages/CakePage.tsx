import {
  Box,
  Grid,
  GridItem,
  Heading,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import CakeCard from "../components/CakeCard";
import cakes from "../data/cakes";

const CakeAll = () => {
  useEffect(() => {
    document.title = "Cakes | Baked Goodies by H";
  }, []);
  return (
    <Grid templateAreas={`"side main""side main"`} mt="40px">
      <GridItem area="side" hideBelow="md">
        <Box pr={{ base: "28px", lg: "100px" }}>
          <RadioGroup>
            <Stack spacing={5}>
              <Heading fontSize="2xl">Type</Heading>
              <Radio colorScheme="pink" value="cupcakes">
                Cupcakes
              </Radio>
              <Radio colorScheme="pink" value="bento">
                Bento Cakes
              </Radio>
              <Radio colorScheme="pink" value="tier">
                Tier Cakes
              </Radio>
              <Radio colorScheme="pink" value="custom">
                Custom Cakes
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </GridItem>
      <GridItem area="main">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="30px">
          {cakes.map((cake) => (
            <CakeCard route={cake.route} image={cake.image}>
              {cake.title}
            </CakeCard>
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
};

export default CakeAll;
