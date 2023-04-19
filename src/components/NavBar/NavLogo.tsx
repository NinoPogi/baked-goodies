import { useColorMode } from "@chakra-ui/color-mode";
import { Link as ReactLink } from "react-router-dom";
import { Heading, Link, Image, HStack } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

const NavLogo = (props: {}) => {
  const { colorMode } = useColorMode();
  return (
    <Link as={ReactLink} to="/" {...props}>
      <HStack spacing={-0.5}>
        <Heading
          fontSize="2xl"
          color={colorMode === "light" ? "#d53f8c" : "#fbb6ce"}
        >
          BakedGoodiesbyH
        </Heading>
        <Image src={logo} alt="Baked Goodies by H" boxSize="2em" mt="3px" />
      </HStack>
    </Link>
  );
};

export default NavLogo;
