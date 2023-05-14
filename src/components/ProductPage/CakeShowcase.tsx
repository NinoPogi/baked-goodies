import { useContext } from "react";
import {
  Box,
  Image,
  Stack,
  Card,
  Heading,
  useColorModeValue,
  Flex,
  Link,
} from "@chakra-ui/react";
import { WindowSizeContext } from "../../contexts/WindowSizeProvider";
import { Link as ReactLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { Cake } from "../../hooks/useCakes";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  cake: Cake;
}

const CakeShowcase = ({ cake }: Props) => {
  const { windowSize } = useContext(WindowSizeContext);
  return (
    <Box
      h={{ sm: "230px", md: "335px", xl: "625px", "1xl": "550px" }}
      w={{ sm: "280px", md: "335px", xl: "500px" }}
      overflow="auto"
      borderRadius="20px"
    >
      <Stack direction={{ base: "row", xl: "column" }}>
        {cake?.images.map((url) => (
          <Card key={url} borderRadius="20px" overflow="hidden" flexShrink="0">
            <Image
              src={getCroppedImageUrl(url)}
              boxSize={{ base: "230px", md: "335px", xl: "500px" }}
            />
          </Card>
        ))}

        <Card borderRadius="20px" bg={useColorModeValue("white", "gray.800")}>
          <Link as={ReactLink} to={cake.album} isExternal>
            <Flex
              alignItems="center"
              justifyContent="center"
              boxSize={{ base: "230px", md: "335px", xl: "500px" }}
              gap="20px"
            >
              <BsFacebook size="35px" />
              <Heading>Click for more</Heading>
              <BiLinkExternal size="25px" />
            </Flex>
          </Link>
        </Card>
      </Stack>
    </Box>
  );
};

export default CakeShowcase;
