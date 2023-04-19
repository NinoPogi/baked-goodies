import { Flex, Show, Spacer } from "@chakra-ui/react";
import NavLogo from "./NavBar/NavLogo";
import ThemeButton from "./NavBar/ThemeButton";
import NavLinks from "./NavBar/NavLinks";
import CakeButton from "./NavBar/CakeButton";

const NavBar = () => {
  return (
    <>
      <Flex alignItems="center" gap="30px" p="26px" overflow="hidden">
        <NavLogo />
        <Spacer />
        <Show above="sm">
          <NavLinks />
          <CakeButton />
        </Show>
      </Flex>
    </>
  );
};

export default NavBar;
