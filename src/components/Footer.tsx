import {
  Box,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Footer() {
  return (
    <Box
      bg="pink.100"
      // bg={useColorModeValue("gray.50", "gray.900")}
      // color={useColorModeValue("gray.700", "gray.200")}
    >
      <Stack py={10} align="center">
        <Link as={ReactLink} to="/">
          <HStack>
            <Image src={logo} boxSize="45px" alt="Baked Goodies by H" />
            <Heading fontSize={{ "1sm": "2xl", sm: "3xl" }}>
              BakedGoodiesbyH
            </Heading>
          </HStack>
        </Link>
        <HStack justify="center">
          <Link href={"https://www.facebook.com/BakedGoodiesbyH"} isExternal>
            Facebook
          </Link>
          <Link href={"https://www.instagram.com/bakedgoodiesbyh/"} isExternal>
            Instagram
          </Link>
          <Link href={"https://www.tiktok.com/@bakedgoodiesbyh"} isExternal>
            Tiktok
          </Link>
        </HStack>
        <Text fontSize={"sm"}>Copyright © 2023, Baked Goodies by H.</Text>
      </Stack>
    </Box>
  );
}
