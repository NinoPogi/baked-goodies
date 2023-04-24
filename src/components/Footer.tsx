import { ReactNode } from "react";

import {
  Box,
  Container,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import logo from "../images/logo.svg";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <HStack>
                <Image src={logo} boxSize="40px" alt="Baked Goodies by H" />
                <Heading fontSize="2xl">BakedGoodiesbyH</Heading>
              </HStack>
            </Box>
            <Text fontSize={"sm"}>Copyright © 2023, Baked Goodies by H.</Text>
          </Stack>

          <Stack align={"flex-end"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Pricing</Link>
          </Stack>
          <Stack align={"flex-end"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Status</Link>
          </Stack>
          <Stack align={"flex-end"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
