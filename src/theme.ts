import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "system",
  useSystemColorMode: true,
  breakpoints: {
    sm: "320px",
    md: "425px",
    lg: "640px",
    xl: "1024px",
    "2xl": "1366px",
    "3xl": "1920px",
  },
  fonts: {
    heading: `'Alkatra', sans-serif`,
    // body: `'Body Font Name', sans-serif`,
  },
});

export default theme;
