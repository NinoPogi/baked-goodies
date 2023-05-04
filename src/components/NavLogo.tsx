import { Link as ReactLink } from "react-router-dom";
import { Heading, Link, Image, HStack } from "@chakra-ui/react";
import logo from "../images/logo.svg";

const NavLogo = (props: {}) => {
  return (
    <Link as={ReactLink} to="/" {...props}>
      <HStack spacing={0}>
        <Image
          src={logo}
          alt="Baked Goodies by H"
          boxSize={{ base: "50px", lg: "64px" }}
        />
        <Heading
          fontFamily="Alkatra"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="pink.500"
        >
          BakedGoodiesbyH
        </Heading>
      </HStack>
    </Link>
  );
};

export default NavLogo;
