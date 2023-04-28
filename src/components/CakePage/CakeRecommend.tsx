import { useEffect, useState } from "react";
import { Box, Card, Heading, Image, Stack } from "@chakra-ui/react";
import CakeCard from "../CakesShop/CakeCard";
import api from "../../services/api-client";
import { Link } from "react-router-dom";

interface Props {
  cakeType: string | undefined;
}

const CakeRecommend = ({ cakeType }: Props) => {
  const [cakes, setCakes] = useState([
    { route: "", images: [], title: "", pricing: "" },
  ]);

  useEffect(() => {
    api.get(`/cake/${cakeType}`).then((res) => {
      setCakes(res.data);
    });
  }, [cakeType]);

  return (
    <Box h="340px" overflow="scroll">
      <Stack
        direction="row"
        h="100%"
        w={{
          "1sm": 280,
          sm: 380,
          md: 704,
          lg: 960,
          xl: 1376,
          "2xl": 1800,
        }}
      >
        {cakes.map((cake) => (
          <Stack flexShrink="0">
            <Link to={cake.route}>
              <Card variant="unstyled" borderRadius="20px" overflow="hidden">
                <Image src={cake.images[0]} boxSize="300px" />
              </Card>
              <Heading textAlign="center" pt="20px " fontSize="lg">
                {cake.title}
              </Heading>
              <Heading textAlign="center" pt="px " fontSize="lg">
                price {cake.pricing}
              </Heading>
            </Link>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default CakeRecommend;
