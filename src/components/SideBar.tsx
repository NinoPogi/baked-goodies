import { VStack } from "@chakra-ui/react";
import CakeButton from "./NavBar/MenuLinks/CakeButton";
import MenuItem from "./NavBar/MenuLinks/MenuItem";
import NavLogo from "./NavBar/NavLogo";

interface Props {
  status: string;
  onOpen: () => void;
}
const SideBar = ({ status, onOpen }: Props) => {
  return (
    <VStack alignItems="flex-start">
      <NavLogo />
      <CakeButton status={status} onOpen={onOpen} />
      <MenuItem link="/price">💰 Pricing</MenuItem>
      <MenuItem link="/cakes">🎂 Cakes</MenuItem>
      <MenuItem link="/">ℹ️ About</MenuItem>
    </VStack>
  );
};

export default SideBar;
