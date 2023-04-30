import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { Customer } from "../hooks/useCustomer";

interface Props {
  open: boolean;
  customer: Customer;
}

const MenuLinks = ({ open, customer }: Props) => {
  return (
    <Box
      display={{ base: open ? "block" : "none", xl: "block" }}
      flexBasis={{ base: "100%", xl: "auto" }}
    >
      <Stack
        spacing={5}
        align="center"
        justify={{ base: "center", lg: "end" }}
        direction={{ base: "column", lg: "row" }}
        pt={[3, 3, 5, 0]}
      >
        <MenuItem link="/">Home</MenuItem>
        <MenuItem link="/shop">CakeShop</MenuItem>
        <MenuItem link="/account">
          {customer?.name !== "" ? `Hello {${customer?.name}}` : "Hello"}
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
