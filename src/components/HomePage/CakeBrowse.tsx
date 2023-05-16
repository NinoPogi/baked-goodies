import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import CakeCard from "../ShopPage/CakeCard";
import useCakes from "../../hooks/useCakes";
import { useNavigate } from "react-router-dom";

const CakeGrid = () => {
  const { data, isLoading, error } = useCakes();

  const navigate = useNavigate();

  const randomIndex1 = Math.floor(Math.random() * 16);

  let randomIndex2 = Math.floor(Math.random() * 16);
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * 16);
  }

  return (
    <Stack>
      <Stack spacing="10px" direction={{ base: "column", xl: "row" }}>
        <Box
          boxSize={{ sm: "15em", md: "21em", xl: "17em", "2xl": "20em" }}
          marginBottom="-200px"
        >
          <Heading fontSize="5xl">
            Check Out The Cakes
            <Button
              marginLeft="60px"
              fontFamily="body"
              size="lg"
              bgGradient="linear(to-r, #ff94c2, #ff6c9d)"
              color="white"
              _hover={{ bgGradient: "linear(to-l, #FF0080, #fc7ebe)" }}
              onClick={() => navigate("/shop")}
            >
              VIEW ALL
            </Button>
          </Heading>
        </Box>
        <CakeCard
          route={data[randomIndex1].route}
          image={data[randomIndex1].images[0]}
          pricing={data[randomIndex1].pricing}
          boxSize={{ sm: "15em", md: "21em", xl: "17em", "2xl": "20em" }}
        >
          {data[randomIndex1].title}
        </CakeCard>
        <CakeCard
          route={data[randomIndex2].route}
          image={data[randomIndex2].images[0]}
          pricing={data[randomIndex2].pricing}
          boxSize={{ sm: "15em", md: "21em", xl: "17em", "2xl": "20em" }}
        >
          {data[randomIndex2].title}
        </CakeCard>
      </Stack>
    </Stack>
  );
};

export default CakeGrid;
