import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuLinks/MenuItem";
import CakeButton from "./MenuLinks/CakeButton";
import ThemeButton from "./MenuLinks/ThemeButton";

interface Props {
  isOpen: boolean;
}

const MenuLinks = ({ isOpen }: Props) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", lg: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "space-between", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[5, 5, 7, 0]}
      >
        <ThemeButton />
        <MenuItem link="/">Home</MenuItem>
        <MenuItem link="/cakes">PriceList</MenuItem>
        <CakeButton />
      </Stack>
    </Box>
  );
};

export default MenuLinks;
