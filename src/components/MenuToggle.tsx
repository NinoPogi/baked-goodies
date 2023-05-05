import { Flex, IconButton, Spacer } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const MenuToggle = ({ isOpen, onToggle }: Props) => {
  return (
    <>
      <Flex
        flex={{ base: 1, xl: "auto" }}
        ml={{ base: -2 }}
        display={{ base: "flex", xl: "none" }}
      >
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
      </Flex>
    </>
  );
};

export default MenuToggle;
