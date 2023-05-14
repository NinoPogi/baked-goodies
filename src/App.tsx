import { Flex, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import WindowSizeProvider from "./contexts/WindowSizeProvider";
import CustomerProvider from "./contexts/CustomerProvider";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import Footer from "./components/Footer";
import SignupModal from "./components/SignUpModal";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <WindowSizeProvider>
        <CustomerProvider>
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <GridItem area="main" px="20px">
            <Flex justify="center">
              <SignupModal />
              <Routes />
            </Flex>
          </GridItem>
          <GridItem area="footer" mt="60px">
            <Footer />
          </GridItem>
        </CustomerProvider>
      </WindowSizeProvider>
    </Grid>
  );
}

export default App;
