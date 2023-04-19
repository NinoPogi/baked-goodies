import { useState } from "react";
import { Box, Flex, Show, Spacer, Stack } from "@chakra-ui/react";
import NavLogo from "./NavBar/NavLogo";
import NavBarContainer from "./NavBar/NavBarContainer";
import MenuToggle from "./NavBar/MenuToggle";
import MenuLinks from "./NavBar/MenuLinks";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBarContainer>
      <NavLogo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
