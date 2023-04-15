import { Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import PostGrid from "../components/CakePortfolio/PostGrid";

const Home = () => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);
  return (
    <>
      <Stack align="center" p="100px 0 90px 0">
        <Heading>CAKES</Heading>
        <Text>Check my cakes 🎂!!1!</Text>
      </Stack>
      <PostGrid />
    </>
  );
};

export default Home;
