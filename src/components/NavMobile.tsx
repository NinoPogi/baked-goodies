import { useContext } from "react";
import { Stack, Badge } from "@chakra-ui/react";
import { CustomerContext } from "../contexts/CustomerProvider";
import MenuItem from "./MenuItem";

const NavMobile = () => {
  const { orders } = useContext(CustomerContext);

  return (
    <Stack
      display={{ base: "flex", xl: "none" }}
      align="center"
      padding="0 20px 50px 20px"
    >
      <MenuItem link="/">Home</MenuItem>
      <MenuItem link="/about">About</MenuItem>
      <MenuItem link="/shop">CakeShop</MenuItem>
      <MenuItem link="/account">
        Account <Badge>{orders.length !== 0 ? orders.length : null}</Badge>
      </MenuItem>
    </Stack>
  );
};

export default NavMobile;
