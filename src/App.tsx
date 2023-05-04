import { Flex, Grid, GridItem } from "@chakra-ui/react";
import CustomerProvider from "./contexts/CustomerProvider";
import Routes from "./Routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <CustomerProvider>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main" px="20px">
          <Flex justify="center">
            <Routes />
          </Flex>
        </GridItem>
        <GridItem area="footer" mt="60px">
          <Footer />
        </GridItem>
      </CustomerProvider>
    </Grid>
  );
}

export default App;
