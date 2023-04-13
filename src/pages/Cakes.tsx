import { useEffect } from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import PostGrid from "../components/PostGrid";

const Cakes = () => {
  useEffect(() => {
    document.title = "Cake Portfolio";
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

export default Cakes;
