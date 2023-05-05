import { Stack, useColorModeValue } from "@chakra-ui/react";

import MenuItem from "./MenuItem";

const NavMobile = () => {
  return (
    <Stack
      display={{ base: "flex", xl: "none" }}
      align="center"
      marginBottom="20px"
      bg={useColorModeValue("pink", "gray.600")}
      borderBottomRadius="20px"
      paddingBottom="50px"
    >
      <MenuItem link="/">Home</MenuItem>
      <MenuItem link="/about">About</MenuItem>
      <MenuItem link="/shop">CakeShop</MenuItem>
    </Stack>
  );
};

export default NavMobile;
