import { Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import PostGrid from "../components/CakePortfolio/PostGrid";

interface User {
  customer: {
    name: string;
  };
}

interface Props {
  status: string;
  user: User;
}

const Home = ({ status, user }: Props) => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);

  let heading = "CHECK MY CAKES🎂";
  if (status !== "ordering") {
    heading = `Welcome Back ${user.customer.name}`;
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
