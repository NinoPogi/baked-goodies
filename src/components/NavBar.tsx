import { useState } from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import NavLogo from "./NavBar/NavLogo";
import MenuToggle from "./NavBar/MenuToggle";
import CakeButton from "./NavBar/MenuLinks/CakeButton";
import MenuItem from "./NavBar/MenuLinks/MenuItem";

interface Props {
  status: string;
  onOpen: () => void;
}

const NavBar = ({ status, onOpen }: Props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Box
      as={Flex}
      align="center"
      gap={5}
      // justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={3}
      // p={{ base: 6, md: 12 }}
      bg={{ base: "pink.400", lg: "transparent" }}
    >
      <MenuToggle toggle={toggle} open={open} />
      <NavLogo />
      <Box
        display={{ base: open ? "block" : "none", lg: "block" }}
        flexBasis={{ base: "100%", lg: "auto" }}
      >
        <Stack
          spacing={5}
          align="center"
          justify={["center", "space-between", "space-between", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[3, 3, 5, 0]}
        >
          <CakeButton status={status} onOpen={onOpen} />
          <MenuItem link="/price">Pricing</MenuItem>
          <MenuItem link="/cakes">Cakes</MenuItem>
          <MenuItem link="/">About</MenuItem>
        </Stack>
      </Box>
    </Box>
  );
};

export default NavBar;
