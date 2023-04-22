import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import CakePortfolio from "./pages/CakePortfolio";
import CakeBento from "./pages/CakeBento";
import CakeMoney from "./pages/CakeMoney";
import CakeCustomize from "./pages/CakeCustomize";
import CakeTier from "./pages/CakeTier";
import Cupcake from "./pages/Cupcake";
import About from "./pages/About";

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Routes>
          <Route path="/" element={<CakePortfolio />} />
          <Route path="/bento" element={<CakeBento />} />
          <Route path="/money" element={<CakeMoney />} />
          <Route path="/customize" element={<CakeCustomize />} />
          <Route path="/tier" element={<CakeTier />} />
          <Route path="/cupcake" element={<Cupcake />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </GridItem>
    </Grid>
  );
}

export default App;
