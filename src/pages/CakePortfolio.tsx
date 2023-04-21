import { useEffect } from "react";
import {
  Heading,
  Stack,
  Text,
  Card,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import cakePortfolio from "../data/cakePortfolio";

interface Customer {
  name: string;
}

interface Props {
  customer: Customer;
}

interface PostCard {
  image: string;
  children: string[];
}

const PostCard = ({ children, image }: PostCard) => {
  return (
    <Card borderRadius="15px" overflow="hidden">
      <Image objectFit="cover" src={image} w="560px" h="250px" />
      {/* <CardBody>
        <Heading fontSize="1xl">{children}</Heading>
      </CardBody> */}
    </Card>
  );
};

export default ({ customer }: Props) => {
  useEffect(() => {
    document.title = "Cake Portfolio | Baked Goodies by H";
  }, []);

  let heading = "CHECK MY CAKES🎂";
  if (customer.name !== "") {
    heading = `Welcome Back ${customer.name}`;
  }

  return (
    <>
      {/* <Stack align="center" p="100px 70px 90px 70px">
        <Heading>{heading}</Heading>
        <Text>Sample</Text>
      </Stack> */}
      <Heading>{heading}</Heading>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="20px"
        p="20px"
      >
        {cakePortfolio.map((value) => (
          <PostCard image={value.image}> {value.description}</PostCard>
        ))}
      </SimpleGrid>
    </>
  );
};
