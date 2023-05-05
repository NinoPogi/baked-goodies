import { Link } from "react-router-dom";
import { Heading, Image, HStack, Hide, Show } from "@chakra-ui/react";
import logo from "../images/logo.svg";

const NavLogo = (props: {}) => {
  return (
    <Link to="/" {...props}>
      <HStack spacing={0}>
        <Image
          src={logo}
          alt="Baked Goodies by H"
          boxSize={{ base: "50px", lg: "64px" }}
        />
        <Heading fontSize={{ base: "2xl", md: "3xl" }} color="pink.500">
          <Show below="lg">BGH</Show>
          <Hide below="lg">BakeGoodiesbyH</Hide>
        </Heading>
      </HStack>
    </Link>
  );
};

export default NavLogo;
