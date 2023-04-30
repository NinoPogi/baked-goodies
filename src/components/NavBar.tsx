import { Box, Flex, useBoolean } from "@chakra-ui/react";
import NavLogo from "./NavLogo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import { Customer } from "../hooks/useCustomer";

interface Props {
  customer: Customer;
}

const NavBar = ({ customer }: Props) => {
  const [open, { toggle }] = useBoolean();

  return (
    <Box
      as={Flex}
      align="center"
      gap={5}
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb="32px"
      p="12px"
      bg="pink.400"
    >
      <NavLogo />
      <MenuToggle toggle={toggle} />
      <MenuLinks open={open} customer={customer} />
    </Box>
  );
};

export default NavBar;
