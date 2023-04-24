import { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Link,
  HStack,
  Heading,
  Image,
  Spacer,
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
    <>
      <Box
        as={Flex}
        wrap="wrap"
        align="center"
        gap="8px"
        justify={{ base: "none", lg: "center" }}
        p={{ base: "8px", lg: "22px 68px" }}
        bg={{ base: "pink.400", lg: "transparent" }}
      >
        <Box display={{ base: "flex", lg: "none" }} onClick={toggle}>
          <GiHamburgerMenu color="white" size={25} />{" "}
        </Box>
        <Spacer hideFrom="lg" />
        <Link as={ReactLink} display={{ base: "none", lg: "block" }} to="/">
          <HStack>
            <Image src={logo} boxSize="65px" alt="Baked Goodies by H" />
            <Heading fontSize={{ "1sm": "2xl", sm: "3xl" }}>
              BakedGoodiesbyH
            </Heading>
          </HStack>
        </Link>
        <Spacer />
        {/* <Box display={{ base: "block", lg: "none" }}>Account</Box> */}
        <Box
          display={{ base: open ? "block" : "none", lg: "block" }}
          flexBasis={{ base: "100%", lg: "auto" }}
        >
          <Stack
            spacing={{ base: "16px", md: "36px" }}
            direction={{ base: "column", lg: "row" }}
          >
            <Link as={ReactLink} to="/">
              <Heading color={{ base: "white", lg: "black" }} fontSize="xl">
                Home
              </Heading>
            </Link>
            <Link as={ReactLink} to="/cakes">
              <Heading color={{ base: "white", lg: "black" }} fontSize="xl">
                All Cakes
              </Heading>
            </Link>
            <Link as={ReactLink} to="/account">
              <Heading color={{ base: "white", lg: "black" }} fontSize="xl">
                Account
              </Heading>
            </Link>
          </Stack>
        </Box>

        {/* <Box display={{ base: "none", lg: "block" }}>Welcome Back</Box> */}
      </Box>
      <Flex as={Flex} justify="center">
        <Link
          as={ReactLink}
          display={{ base: "block", lg: "none" }}
          m="20px"
          to="/"
        >
          <HStack spacing="-2px">
            <Image src={logo} boxSize="40px" alt="Baked Goodies by H" />
            <Heading fontSize={{ "1sm": "2xl", sm: "3xl" }}>
              BakedGoodiesbyH
            </Heading>
          </HStack>
        </Link>
      </Flex>
    </>
  );
};

export default NavBar;
