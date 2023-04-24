import { useEffect } from "react";
import { Card, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CakeBento = () => {
  useEffect(() => {
    document.title = "Bento Cakes | Baked Goodies by H";
  }, []);
  return (
    <VStack align="left">
      <Heading>Bento Cakes</Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="6px">
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/239599791_311216154023994_8336706390727573416_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHHc3Q2NN1KJ1sD4pJP4p1S1Ol_XlYeO9LU6X9eVh470kx0TA59qil8DgSHrj7UtJr6dIhLGPrK0Eo6F1_Q9yRk&_nc_ohc=zm1ayy2gUssAX_tPg1o&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfAIfWVGSBv1KsK8W0Z4pXHjEXgZbNaUXw_lDlxEO5CAgA&oe=644C1D3A"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Bento Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/317692434_565800458890181_804706261999803821_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEKSyU66FxEwMsOhxPR6y4VU7WPklrTC8hTtY-SWtMLyP95rnI5EBNSTcpI3A0Lc9EI-eVxp3I1cH_8Eyz0P-sR&_nc_ohc=0dEG-ifQXE0AX-KU3J7&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfCY8Pgdd1HFwob5Kj_t8E_jqzOTIZGYOSHfzWXaDPX-Uw&oe=644B2407"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Bento Number Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/274047035_422819422863666_5155302756378845466_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFfxY41nDvRJzWjL--8CK-uT7vdXGSomEdPu91cZKiYR06ar59DYRKZvUbZ1faYAw_YP1f2sie1Z5MDHZs6DzdC&_nc_ohc=RKnugXU9Z9kAX-6pL86&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfDAxMrvFLlYScvcWioUyF12Zvo4k0qbmyZr4vX6QX2dSA&oe=644A6A86"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Bento Bundle</Heading>
        </Link>
      </SimpleGrid>
    </VStack>
  );
};

export default CakeBento;
