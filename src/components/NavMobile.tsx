import { useContext } from "react";
import { Stack, Badge } from "@chakra-ui/react";
import { CustomerContext } from "../contexts/CustomerProvider";
import MenuItem from "./MenuItem";
import ThemeSwitcher from "./ThemeSwitcher";

const NavMobile = () => {
  const { orders } = useContext(CustomerContext);

  return (
    <Stack
      display={{ base: "flex", xl: "none" }}
      align="center"
      marginBottom="20px"
      bg="pink"
      borderBottomRadius="20px"
    >
      <MenuItem link="/">Home</MenuItem>
      <MenuItem link="/about">About</MenuItem>
      <MenuItem link="/shop">CakeShop</MenuItem>
    </Stack>
  );
};

export default NavMobile;
