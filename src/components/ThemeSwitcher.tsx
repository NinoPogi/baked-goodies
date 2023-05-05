import { Link, useColorMode } from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/cg";

const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Link bg="" onClick={toggleColorMode}>
      <CgDarkMode size="26px" />
    </Link>
  );
};

export default ThemeSwitcher;
