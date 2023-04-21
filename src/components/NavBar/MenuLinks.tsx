import { Box, Stack } from "@chakra-ui/react";
import MenuItem from "./MenuLinks/MenuItem";
import CakeButton from "./MenuLinks/CakeButton";
import ThemeSwitcher from "./MenuLinks/ThemeSwitcher";

interface Props {
  status: string;
  open: boolean;
  onOpen: () => void;
}

const MenuLinks = ({ status, open, onOpen }: Props) => {
  return (
    <Box
      display={{ base: open ? "block" : "none", lg: "block" }}
      flexBasis={{ base: "100%", lg: "auto" }}
    >
      <Stack
        spacing={5}
        align="center"
        justify={["center", "space-between", "space-between", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[5, 5, 7, 0]}
      >
        <MenuItem link="/">About</MenuItem>
        <MenuItem link="/cakes">Cakes</MenuItem>
        <MenuItem link="/price">PriceList</MenuItem>
        <CakeButton status={status} onOpen={onOpen} />
      </Stack>
    </Box>
  );
};

export default MenuLinks;
