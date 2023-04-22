import { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  MenuItem,
  Link,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ReactLink } from "react-router-dom";
import logo from "../images/logo.svg";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Box
      as={Flex}
      wrap="wrap"
      align="center"
      justify={{ base: "none", lg: "space-between" }}
      gap={5}
      p={3}
      //   p={{ base: 3, lg: 12 }}
      borderRadius={8}
      bg={{ base: "pink.400", lg: "transparent" }}
    >
      <Box display={{ base: "block", lg: "none" }} onClick={toggle}>
        <GiHamburgerMenu color="white" size={25} />
      </Box>
      <Link as={ReactLink} to="/">
        <HStack spacing={-0.5}>
          <Image src={logo} boxSize={9} alt="Baked Goodies by H" />
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            color={{
              base: "white",
              lg: colorMode === "light" ? "#d53f8c" : "#fbb6ce",
            }}
          >
            BakedGoodiesbyH
          </Heading>
        </HStack>
      </Link>
      <Box
        display={{ base: open ? "block" : "none", lg: "block" }}
        flexBasis={{ base: "100%", lg: "auto" }}
      >
        <Stack
          spacing={{ base: 0, md: 5 }}
          align="center"
          direction={{ base: "column", md: "row" }}
          pt={[3, 3, 5, 0]}
        >
          <Link as={ReactLink} to="/">
            <Heading color={{ base: "white", lg: "black" }} fontSize="2xl">
              Home
            </Heading>
          </Link>
          <Link as={ReactLink} to="/bento">
            <Heading color={{ base: "white", lg: "black" }} fontSize="2xl">
              Bento Cakes
            </Heading>
          </Link>
          <Link as={ReactLink} to="/money">
            <Heading color={{ base: "white", lg: "black" }} fontSize="2xl">
              Money Cakes
            </Heading>
          </Link>
          <Link as={ReactLink} to="/customize">
            <Heading color={{ base: "white", lg: "black" }} fontSize="2xl">
              Customize Cakes
            </Heading>
          </Link>
          <Link as={ReactLink} to="/tier">
            <Heading color={{ base: "white", lg: "black" }} fontSize="2xl">
              Tier Cakes
            </Heading>
          </Link>
          <Link as={ReactLink} to="/cupcake">
            <Heading color={{ base: "white", lg: "black" }} fontSize="2xl">
              Cupcakes
            </Heading>
          </Link>
          <Link as={ReactLink} to="/about">
            <Heading color={{ base: "white", lg: "black" }} fontSize="2xl">
              About
            </Heading>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default NavBar;
