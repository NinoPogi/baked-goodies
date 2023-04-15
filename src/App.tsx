import { Divider, Grid, GridItem } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CakePortfolio from "./pages/CakePortfolio";
import CakeShop from "./pages/CakeShop";

function App() {
  return (
    <Grid
      templateAreas={`"nav" "main" "footer"`}
      p={{
        sm: "0 100px 0 100px",
        md: "0 45px 0 45px",
        lg: "0 80px 0 80px",
        xl: "0 150px 0 150px",
        "2xl": "0 500px 0 500px",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Routes>
          <Route path="/" element={<CakePortfolio />} />
          <Route path="/cakes" element={<CakeShop />} />
        </Routes>
      </GridItem>
      <GridItem area="footer">
        <Divider orientation="horizontal" />
        footer
      </GridItem>
    </Grid>
  );
}

export default App;
