import { Box } from "@chakra-ui/react";
import { FiX, FiMenu } from "react-icons/fi";

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <FiX /> : <FiMenu />}
    </Box>
  );
};

export default MenuToggle;
