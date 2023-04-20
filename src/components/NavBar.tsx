import { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import NavLogo from "./NavBar/NavLogo";
import NavBarContainer from "./NavBar/NavBarContainer";
import MenuToggle from "./NavBar/MenuToggle";
import MenuLinks from "./NavBar/MenuLinks";
import OrderModal from "./OrderModal";

interface Props {
  status: string;
  isOpen: boolean;
  onOpen: () => void;
}

const NavBar = ({ status, isOpen, onOpen }: Props) => {
  const [open, setOpen] = useState(true);

  const toggle = () => setOpen(!open);
  return (
    <NavBarContainer>
      <NavLogo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks status={status} isOpen={isOpen} onOpen={onOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
