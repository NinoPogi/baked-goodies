import {
  Flex,
  useDisclosure,
  useColorModeValue,
  Collapse,
  Spacer,
} from "@chakra-ui/react";
import NavLogo from "./NavLogo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavMobile from "./NavMobile";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: "20px", xl: "40px" }}
        px={{ base: "20px", xl: "80px" }}
        align={"center"}
      >
        <MenuToggle isOpen={isOpen} onToggle={onToggle} />
        <NavLogo />
        <Spacer />
        <MenuLinks />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <NavMobile />
      </Collapse>
    </>
  );
};

export default NavBar;
