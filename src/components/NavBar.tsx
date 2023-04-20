import { useState } from "react";
import NavLogo from "./NavBar/NavLogo";
import NavBarContainer from "./NavBar/NavBarContainer";
import MenuToggle from "./NavBar/MenuToggle";
import MenuLinks from "./NavBar/MenuLinks";

interface Props {
  status: string;
  onOpen: () => void;
}

const NavBar = ({ status, onOpen }: Props) => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <NavBarContainer>
      <NavLogo />
      <MenuToggle toggle={toggle} open={open} />
      <MenuLinks status={status} open={open} onOpen={onOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
