import { useEffect } from "react";
import { Card, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cupcake = () => {
  useEffect(() => {
    document.title = "Cupcakes | Baked Goodies by H";
  }, []);

  return (
    <VStack align="left">
      <Heading>Cupcakes</Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="6px">
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/335609297_729629915613605_6546250305319673702_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHOjVNSvP0YF38agzj0KZ7TtrWfYQ1DEru2tZ9hDUMSuz36FmT06okBiR4ERh3XstpMIW_q40fB3Q8rYgEfWagK&_nc_ohc=WdbvNouPj-UAX-fHP3M&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfB9zZ4cAlf-XFtERAyHgkIpbr0WuvsChJOo-QV0MDVh-w&oe=644B9DAA"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Cupcakes</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/262380223_377676067378002_2334162825098849094_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHxvGO7uweh805EugCqIspBNMkfPnaiZQ00yR8-dqJlDbr5gMQfo_Eome5dE_lgl4UL6xIboAqT-Hs2mqgGzlqz&_nc_ohc=MSVUwlgSBk0AX9oezcn&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfC6vu7DWiLbULf1oq9M1p8WObb1p9bBWI8tFamg64m7zw&oe=644B895F"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Pullapart Cupcakes</Heading>
        </Link>
      </SimpleGrid>
    </VStack>
  );
};

export default Cupcake;
