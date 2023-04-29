import { useEffect, useState } from "react";
import { Box, Card, Heading, Image, Stack } from "@chakra-ui/react";
import CakeCard from "./CakeCard";
import api from "../services/api-client";
import { Link } from "react-router-dom";

interface Props {
  type: string | undefined;
}

const CakeRecommend = ({ type }: Props) => {
  const [cakes, setCakes] = useState([
    { _id: "", route: "", images: [], title: "", pricing: "" },
  ]);

  useEffect(() => {
    api.get(`/cake${type}`).then((res) => {
      setCakes(res.data);
    });
  }, [type]);

  return (
    <Box
      h="24.3%"
      w={{
        "1sm": "280px",
        sm: "385px",
        md: "728px",
        lg: "984px",
        xl: "1400px",
      }}
      overflow="auto"
      borderRadius="20px"
    >
      <Stack direction="row">
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
      </Stack>
    </Box>
  );
};

export default CakeRecommend;
