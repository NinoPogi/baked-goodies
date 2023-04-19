import { Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import PostGrid from "../components/CakePortfolio/PostGrid";

const Home = () => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);
  return (
    <>
      <Stack align="center" p="100px 70px 90px 70px">
        <Heading>CHECK MY CAKES🎂</Heading>
        <Text>Mahilig na talaga ako magbake or magluto.</Text>
      </Stack>
      <PostGrid />
    </>
  );
};

export default Home;
