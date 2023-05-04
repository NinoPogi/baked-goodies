import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import getCroppedImageUrl from "../../services/image-url";

interface RequiredProps {
  image: string;
}

interface OptionalProps {
  route: string;
  children: string;
  pricing: string;
  boxSize: {};
}

interface Props extends RequiredProps, OptionalProps {}
const defaultProps: OptionalProps = {
  route: "",
  children: "",
  pricing: "",
  boxSize: { base: "normal" },
};

//  <Center py={12}>
// <Box
//   role={"group"}
//   p={6}
//   maxW={"330px"}
//   w={"full"}
//   bg={useColorModeValue("white", "gray.800")}
//   boxShadow={"2xl"}
//   rounded={"lg"}
//   pos={"relative"}
//   zIndex={1}
// >
//   <Box
//     rounded={"lg"}
//     mt={-12}
//     pos={"relative"}
//     height={"230px"}
//     _after={{
//       transition: "all .3s ease",
//       content: '""',
//       w: "full",
//       h: "full",
//       pos: "absolute",
//       top: 5,
//       left: 0,
//       backgroundImage: `url(${getCroppedImageUrl(image)})`,
//       filter: "blur(15px)",
//       zIndex: -1,
//     }}
//     _groupHover={{
//       _after: {
//         filter: "blur(20px)",
//       },
//     }}
//   >
//     <Image
//       rounded={"lg"}
//       height={230}
//       width={282}
//       objectFit={"cover"}
//       src={getCroppedImageUrl(image)}
//     />
//   </Box>
//   <Stack pt={10} align={"center"}>
//     <Text color={"gray.500"} fontSize={"2xs"} textTransform={"uppercase"}>
//       BakedGoodiesByH
//     </Text>
//     <Heading
//       fontSize={"2xl"}
//       fontFamily={"body"}
//       fontWeight={500}
//       textAlign="center"
//     >
//       {children}
//     </Heading>
//     <Text fontWeight={800} fontSize={"lg"}>
//       {pricing}
//     </Text>
//   </Stack>
// </Box>
// </Center>

const CakeCard = ({ route, image, children, pricing, boxSize }: Props) => {
  return (
    <Box flexShrink="0" role="group">
      <Link to={route}>
        <Card
          variant="unstyled"
          bg="white"
          borderRadius="20px"
          p={{ base: "0", md: "8px" }}
        >
          <CardBody p={{ base: "10px", md: "0px" }}>
            <Image
              position="relative"
              src={getCroppedImageUrl(image)}
              boxSize={{ ...boxSize }}
              borderRadius="20px"
              _groupHover={{
                p: "2px",
              }}
            />
            <Stack pt={7} align={"center"}>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
                textAlign="center"
                _groupHover={{
                  textDecoration: "underline",
                }}
              >
                {children}
              </Heading>
              <Text fontWeight={800} fontSize={"lg"}>
                {pricing}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </Box>
  );
};

CakeCard.defaultProps = defaultProps;

export default CakeCard;
