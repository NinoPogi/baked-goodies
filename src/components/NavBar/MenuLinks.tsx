import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuLinks/MenuItem";
import CakeButton from "./MenuLinks/CakeButton";

interface Props {
  isOpen: boolean;
}

const MenuLinks = ({ isOpen }: Props) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem link="/">Home</MenuItem>
        <MenuItem link="/cakes">PriceList</MenuItem>
        <CakeButton />
      </Stack>
    </Box>
  );
};

export default MenuLinks;
