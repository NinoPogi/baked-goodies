import { Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import PostGrid from "../components/CakePortfolio/PostGrid";

interface Customer {
  name: string;
}

interface Props {
  customer: Customer;
}

const Home = ({ customer }: Props) => {
  useEffect(() => {
    document.title = "Cake Portfolio | Baked Goodies by H";
  }, []);

  let heading = "CHECK MY CAKES🎂";
  if (customer.name !== "") {
    heading = `Welcome Back ${customer.name}`;
  }

  return (
    <>
      <Stack align="center" p="100px 70px 90px 70px">
        <Heading>{heading}</Heading>
        <Text>Sample</Text>
      </Stack>
      <PostGrid />
    </>
  );
};

export default Home;
