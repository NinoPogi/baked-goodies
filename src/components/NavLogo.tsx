import { Link } from "react-router-dom";
import {
  Heading,
  Image,
  HStack,
  Hide,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
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
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          color={useColorModeValue("pink.500", "pink.300")}
        >
          <Hide below="md">BakeGoodiesbyH</Hide>
          <Hide below="sm">
            <Hide above="lg">BGH</Hide>
          </Hide>
        </Heading>
      </HStack>
    </Link>
  );
};

export default NavLogo;
