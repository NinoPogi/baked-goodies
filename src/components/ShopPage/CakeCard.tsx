import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Flex,
  Stack,
  Center,
  useColorModeValue,
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

const CakeCard = ({ route, image, children, pricing, boxSize }: Props) => {
  return (
    <Link to={route}>
      <Center flexShrink="0" py={7}>
        <Box
          role={"group"}
          p={4}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"md"}
          borderRadius="20px"
          pos={"relative"}
          zIndex={1}
        >
          <Box
            borderRadius="20px"
            mt={"-48px"}
            pos={"relative"}
            height={"200px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              borderRadius="20px"
              height={230}
              width={282}
              objectFit={"cover"}
              src={getCroppedImageUrl(image)}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading
              fontSize={"2xl"}
              fontFamily={"body"}
              fontWeight={500}
              textAlign="center"
            >
              {children}
            </Heading>
            <Text fontWeight={800} fontSize={"lg"}>
              {pricing}
            </Text>
          </Stack>
        </Box>
      </Center>
    </Link>
  );
};

CakeCard.defaultProps = defaultProps;

export default CakeCard;
