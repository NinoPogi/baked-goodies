import { Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);
  return (
    <>
      <Stack align="center" p="100px 0 90px 0">
        <Heading>WELCOME</Heading>
      </Stack>
      <Stack align="center" p="100px 0 90px 0">
        <Heading>TO</Heading>
      </Stack>
      <Stack align="center" p="100px 0 90px 0">
        <Heading>MY</Heading>
      </Stack>
      <Stack align="center" p="100px 0 90px 0">
        <Heading>CAKES</Heading>
      </Stack>
    </>
  );
};

export default Home;
