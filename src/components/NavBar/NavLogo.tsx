import { useColorMode } from "@chakra-ui/color-mode";
import { Link as ReactLink } from "react-router-dom";
import { Heading, Link, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";

const NavLogo = () => {
  const { colorMode } = useColorMode();
  return (
    <Link as={ReactLink} to="/" display="flex">
      <Heading color={colorMode === "light" ? "#d53f8c" : "#fbb6ce"}>
        BakedGoodies
      </Heading>
      <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" mt="3px" />
    </Link>
  );
};

export default NavLogo;
