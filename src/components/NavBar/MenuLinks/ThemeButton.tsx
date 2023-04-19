import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button bg="" onClick={toggleColorMode} pt="2px">
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ThemeButton;
