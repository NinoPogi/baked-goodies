import { useContext } from "react";
import { Avatar, Badge, Button, HStack, Text, Spacer } from "@chakra-ui/react";
import { CustomerContext } from "../contexts/CustomerProvider";
import MenuItem from "./MenuItem";
import ThemeSwitcher from "./ThemeSwitcher";

const MenuLinks = () => {
  const { customer, orders } = useContext(CustomerContext);
  return (
    <HStack>
      <HStack
        display={{ base: "none", xl: "flex" }}
        spacing={{ xl: "20px", "2xl": "40px" }}
      >
        <MenuItem link="/">Home</MenuItem>
        <MenuItem link="/about">About</MenuItem>
        <MenuItem link="/shop">CakeShop</MenuItem>
      </HStack>
      <Spacer />
      <ThemeSwitcher />
      <MenuItem link="/account">
        <Button leftIcon={<Avatar size="xs" />} borderRadius="20px">
          <HStack>
            <Text display={{ base: "none", lg: "block" }}>
              {customer.name ? customer.name : "Account"}
            </Text>
            {orders.length !== 0 ? (
              <Badge colorScheme="pink">{orders.length}</Badge>
            ) : null}
          </HStack>
        </Button>
      </MenuItem>
    </HStack>
  );
};

export default MenuLinks;
