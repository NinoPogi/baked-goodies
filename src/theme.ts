import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    initialColorMode: "system",
    useSystemColorMode: true,
    breakpoints: {
      sm: "320px",
      md: "375px",
      lg: "390px",
      xl: "820px",
      "1xl": "1024px",
      "2xl": "1366px",
      "3xl": "1920px",
    },
    fonts: {
      heading: `'Alkatra', sans-serif`,
      // body: `'Body Font Name', sans-serif`,
    },
    colors: {
      gray: {
        50: "#f9f9f9",
        100: "#ededed",
        200: "#d3d3d3",
        300: "#b3b3b3",
        400: "#a0a0a0",
        500: "#898989",
        600: "#6c6c6c",
        700: "#202020",
        800: "#121212",
        900: "#111",
      },
    },
    styles: {
      global: (props: any) => ({
        body: {
          bg: mode("#f3f3f3", "gray.700")(props),
          color: mode("#544d4d", "white")(props),
        },
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: "pink" })
);

export default theme;
