import { Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CakePage from "./pages/CakePage";
import Footer from "./components/Footer";
import AccountPage from "./pages/AccountPage";
import Bento from "./pages/Cakes/Bento/Bento";
import BentoNumber from "./pages/Cakes/Bento/BentoNumber";
import BentoBundle from "./pages/Cakes/Bento/BentoBundle";
import Cupcake from "./pages/Cakes/Cupcake/Cupcake";
import PullapartCupcake from "./pages/Cakes/Cupcake/PullapartCupcake";
import Tier3 from "./pages/Cakes/Tier/Tier3";
import TierBaby from "./pages/Cakes/Tier/TierBaby";
import TierBig from "./pages/Cakes/Tier/TierBig";
import TierMini from "./pages/Cakes/Tier/TierMini";
import TierSmall from "./pages/Cakes/Tier/TierSmall";
import TierSmall3 from "./pages/Cakes/Tier/TierSmall3";
import CakeTheme from "./pages/Cakes/CustomCake/CakeTheme";
import CakeMinimalist from "./pages/Cakes/CustomCake/CakeMinimalist";
import CakeMoney from "./pages/Cakes/CustomCake/CakeMoney";
import CakeNumber from "./pages/Cakes/CustomCake/CakeNumber";
import CakeNumberMini from "./pages/Cakes/CustomCake/CakeNumberMini";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`} bgColor="teal.100">
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" p="0 20px">
        <Flex justify="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cakes" element={<CakePage />} />
            <Route path="cake">
              <Route path="bento">
                <Route path="" element={<Bento />} />
                <Route path="number" element={<BentoNumber />} />
                <Route path="bundle" element={<BentoBundle />} />
              </Route>
              <Route path="cupcake">
                <Route path="" element={<Cupcake />} />
                <Route path="pullapart" element={<PullapartCupcake />} />
              </Route>
              <Route path="tier">
                <Route path="" element={<Tier3 />} />
                <Route path="baby" element={<TierBaby />} />
                <Route path="big" element={<TierBig />} />
                <Route path="mini" element={<TierMini />} />
                <Route path="small" element={<TierSmall />} />
                <Route path="small3" element={<TierSmall3 />} />
              </Route>
              <Route path="custom">
                <Route path="" element={<CakeTheme />} />
                <Route path="minimalist" element={<CakeMinimalist />} />
                <Route path="money" element={<CakeMoney />} />
                <Route path="number" element={<CakeNumber />} />
                <Route path="numbermini" element={<CakeNumberMini />} />
              </Route>
            </Route>
            <Route path="account" element={<AccountPage />} />
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
