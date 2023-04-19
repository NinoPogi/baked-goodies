import { Button, useColorMode } from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/Cg";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button bg="" onClick={toggleColorMode} pt="2px">
      {colorMode === "light" ? <CgDarkMode /> : <CgDarkMode />}
    </Button>
  );
};

export default ThemeButton;
