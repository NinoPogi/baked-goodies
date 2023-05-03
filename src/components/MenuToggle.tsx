import { Box } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  toggle: () => void;
}

const MenuToggle = ({ toggle }: Props) => {
  return (
    <Box display={{ base: "block", xl: "none" }} onClick={toggle}>
      <GiHamburgerMenu color="white" size="20px" />
    </Box>
  );
};

export default MenuToggle;
