import { useContext } from "react";
import { Avatar, Badge, Button, HStack, Text, Spacer } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { CustomerContext } from "../contexts/CustomerProvider";
import MenuItem from "./MenuItem";
import ThemeSwitcher from "./ThemeSwitcher";

const MenuLinks = () => {
  const { customer, orders } = useContext(CustomerContext);

  return (
    <>
      <HStack
        display={{ base: "none", xl: "flex" }}
        spacing={{ xl: "20px", "2xl": "40px" }}
      >
        <MenuItem link="/">Home</MenuItem>
        <MenuItem link="/about">About</MenuItem>
        <MenuItem link="/shop">CakeShop</MenuItem>
      </HStack>
      <Spacer />
      <HStack spacing="20px">
        <ThemeSwitcher />
        <FiSearch size="26px" />
        <MenuItem link="/account">
          <Button
            leftIcon={
              <Avatar fontFamily="body" name={customer.name} size="xs" />
            }
            color="pink.400"
            bg="navajowhite"
            borderRadius="20px"
          >
            <HStack>
              <Text display={{ base: "none", xl: "block" }}>
                {customer.name ? customer.name : "Account"}
              </Text>
              {orders?.length !== 0 ? (
                <Badge color="teal" bg="pink.200">
                  {orders.length}
                </Badge>
              ) : null}
            </HStack>
          </Button>
        </MenuItem>
      </HStack>
    </>
  );
};

export default MenuLinks;
