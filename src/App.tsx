import { Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CakePage from "./pages/CakePage";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`} bgColor="teal.100">
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" p="0 20px 0 20px">
        <Flex justify="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cakes" element={<CakePage />} />
          </Routes>
        </Flex>
      </GridItem>
      <GridItem area="footer" pt="60px">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
