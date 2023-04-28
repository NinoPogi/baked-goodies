import { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Link,
  HStack,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ReactLink } from "react-router-dom";
import logo from "../images/logo.svg";

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  orders: string[];
}

interface Props {
  customer: Customer;
}

const NavBar = ({ customer }: Props) => {
  const { colorMode } = useColorMode();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        as={Flex}
        w="100%"
        wrap="wrap"
        align="center"
        gap="8px"
        justify={{ base: "none", lg: "center" }}
        zIndex="1"
        position="fixed"
        p={{ base: "8px", lg: "8px 68px" }}
        bg="pink.400"
        backdropFilter="saturate(180%) blur(5px)"
      >
        <Box display={{ base: "flex", lg: "none" }} onClick={toggle}>
          <GiHamburgerMenu color="white" size={25} />{" "}
        </Box>
        <Spacer hideFrom="lg" />
        <Link as={ReactLink} display={{ base: "none", lg: "block" }} to="/">
          <HStack>
            <Image src={logo} boxSize="65px" alt="Baked Goodies by H" />
            <Heading fontSize={{ "1sm": "2xl", sm: "3xl" }}>
              BakedGoodiesbyH
            </Heading>
          </HStack>
        </Link>
        <Spacer />

        <Box
          display={{ base: open ? "block" : "none", lg: "block" }}
          flexBasis={{ base: "100%", lg: "auto" }}
        >
          <Stack
            spacing={{ base: "16px", md: "36px" }}
            direction={{ base: "column", lg: "row" }}
          >
            <Link as={ReactLink} to="/">
              <Heading color={{ base: "white", lg: "black" }} fontSize="xl">
                Home
              </Heading>
            </Link>
            <Link as={ReactLink} to="/cakeshop">
              <Heading color={{ base: "white", lg: "black" }} fontSize="xl">
                Cakes
              </Heading>
            </Link>
            <Link as={ReactLink} to="/hello">
              <Heading color={{ base: "white", lg: "black" }} fontSize="xl">
                {customer.name !== "" ? `Hello ${customer.name}` : "Hello"}
              </Heading>
            </Link>
          </Stack>
        </Box>
      </Box>
      <Flex display={{ base: "flex", lg: "none" }} justify="center" mt="41px">
        <Link as={ReactLink} m="20px" to="/">
          <HStack spacing="-2px">
            <Image src={logo} boxSize="40px" alt="Baked Goodies by H" />
            <Heading fontSize={{ "1sm": "2xl", sm: "3xl" }}>
              BakedGoodiesbyH
            </Heading>
          </HStack>
        </Link>
      </Flex>
    </>
  );
};

export default NavBar;
