import { useEffect } from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import PostGrid from "../components/CakePortfolio/PostGrid";

const Cakes = () => {
  useEffect(() => {
    document.title = "Price List | Baked Goodies by H";
  }, []);
  return <></>;
};

export default Cakes;
