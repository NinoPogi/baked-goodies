import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "system",
  useSystemColorMode: true,
  breakpoints: {
    "1sm": "320px",
    sm: "425px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
    "2xl": "1920px",
  },
  fonts: {
    heading: `'Alkatra', sans-serif`,
    body: `'Body Font Name', sans-serif`,
  },
});

export default theme;
