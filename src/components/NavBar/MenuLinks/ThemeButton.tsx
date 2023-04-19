import {
  Button,
  Heading,
  Hide,
  Link,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/Cg";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Link bg="" onClick={toggleColorMode}>
      <Show above="lg">
        {colorMode === "light" ? (
          <CgDarkMode size="20px" />
        ) : (
          <CgDarkMode size="20px" />
        )}
      </Show>
      <Hide above="lg">
        <Heading fontSize="2xl">Theme</Heading>
      </Hide>
    </Link>
  );
};

export default ThemeButton;
