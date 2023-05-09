import { Link } from "react-router-dom";
import {
  Heading,
  Image,
  HStack,
  Hide,
  Show,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import logo from "../images/logo.svg";

const NavLogo = (props: {}) => {
  return (
    <Link to="/" {...props}>
      <HStack spacing={0}>
        <Image
          src={logo}
          alt="Baked Goodies by H"
          boxSize={{ base: "50px", xl: "64px" }}
        />
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          bgGradient="linear(to-r, #ff94c2, #ff6c9d)"
          bgClip="text"
          // color={useColorModeValue("pink.500", "pink.300")}
        >
          <Box display={{ base: "none", "1xl": "block" }}>BakeGoodiesbyH</Box>
          <Box display={{ base: "none", md: "block", "1xl": "none" }}>BGH</Box>
        </Heading>
      </HStack>
    </Link>
  );
};

export default NavLogo;
