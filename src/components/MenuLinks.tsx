import { useContext } from "react";
import { Avatar, Badge, Box, HStack, Spacer } from "@chakra-ui/react";
import { CustomerContext } from "../contexts/CustomerProvider";
import MenuItem from "./MenuItem";

const MenuLinks = () => {
  const { orders } = useContext(CustomerContext);
  return (
    <HStack display={{ base: "none", xl: "flex" }} spacing="40px">
      <MenuItem link="/">Home</MenuItem>
      <MenuItem link="/about">About</MenuItem>
      <MenuItem link="/shop">Cake Shop</MenuItem>
      <Spacer />
      <HStack>
        <MenuItem link="/account">
          Account <Badge>{orders.length !== 0 ? orders.length : null}</Badge>
        </MenuItem>
        <Avatar />
      </HStack>
    </HStack>
  );
};

export default MenuLinks;
