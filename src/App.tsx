import { Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CakeBento from "./pages/CakeBento";
import CakeCustomize from "./pages/CakeCustomize";
import Cupcake from "./pages/Cupcake";
import CakeAll from "./pages/CakeAll";
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
            <Route path="/custom" element={<CakeCustomize />} />
            <Route path="/bento" element={<CakeBento />} />
            <Route path="/cupcake" element={<Cupcake />} />
            <Route path="/other" element={<CakeAll />} />
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
