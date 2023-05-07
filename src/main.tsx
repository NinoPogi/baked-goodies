import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./services/scroll-to-top";
import App from "./App";
import theme from "./theme";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ChakraProvider>

);
