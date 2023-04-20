import { Box } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

interface Props {
  toggle: () => void;
  open: boolean;
}

const MenuToggle = ({ toggle, open }: Props) => {
  return (
    <Box display={{ base: "block", lg: "none" }} onClick={toggle}>
      {open ? (
        <MdOutlineClose color="white" size="30px" />
      ) : (
        <GiHamburgerMenu color="white" size="20px" />
      )}
    </Box>
  );
};

export default MenuToggle;
