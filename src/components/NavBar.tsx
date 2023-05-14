import { useContext } from "react";
import {
  Flex,
  useDisclosure,
  useColorModeValue,
  Collapse,
  Spacer,
  FlexProps,
  Progress,
} from "@chakra-ui/react";
import NavLogo from "./NavLogo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavMobile from "./NavMobile";
import { CustomerContext } from "../contexts/CustomerProvider";

const NavBar = () => {
  const { progress } = useContext(CustomerContext);
  const { isOpen, onToggle } = useDisclosure();

  const bgColor = useColorModeValue("pink", "pink.900");

  return (
    <>
      {progress ? (
        progress === 100 ? null : (
          <Progress
            value={progress}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
            }}
          />
        )
      ) : null}
      <Flex
        bg={isOpen ? bgColor : "transparent"}
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
      <Collapse transition={undefined} in={isOpen}>
        <NavMobile />
      </Collapse>
    </>
  );
};

export default NavBar;
