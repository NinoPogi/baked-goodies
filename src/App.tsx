import { Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CakesShop from "./pages/CakesShop";
import Footer from "./components/Footer";
import AccountPage from "./pages/AccountPage";
import CakePage from "./pages/CakePage";

function App() {
  return (
    <Grid
      templateAreas={`"nav" "main" "footer"`}
      // bgColor="teal.100"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* mt={{ base: "0", lg: "109px" }} */}
      <GridItem area="main" p="20px 20px">
        <Flex justify="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cakes" element={<CakesShop />} />
            <Route path="cake">
              <Route path="bento">
                <Route path="" element={<CakePage cakeName="Bento Cake" />} />
                <Route
                  path="number"
                  element={<CakePage cakeName="Bento Number Cake" />}
                />
                <Route
                  path="bundle"
                  element={<CakePage cakeName="Bento Bundle" />}
                />
              </Route>
              <Route path="cupcake">
                <Route path="" element={<CakePage cakeName="Cupcake" />} />
                <Route
                  path="pullapart"
                  element={<CakePage cakeName="Pullapart Cupcake" />}
                />
              </Route>
              <Route path="tier">
                <Route path="" element={<CakePage cakeName="3 Tier Cake" />} />
                <Route
                  path="baby"
                  element={<CakePage cakeName="Baby Tier Cake" />}
                />
                <Route
                  path="big"
                  element={<CakePage cakeName="Big Tier Cake" />}
                />
                <Route
                  path="mini"
                  element={<CakePage cakeName="Mini Tier Cake" />}
                />
                <Route
                  path="small"
                  element={<CakePage cakeName="Small Tier Cake" />}
                />
                <Route
                  path="small3"
                  element={<CakePage cakeName="Small 3 Tier Cake" />}
                />
              </Route>
              <Route path="custom">
                <Route path="" element={<CakePage cakeName="Theme Cake" />} />
                <Route
                  path="minimalist"
                  element={<CakePage cakeName="Minimalist Cake" />}
                />
                <Route
                  path="money"
                  element={<CakePage cakeName="Money Cake" />}
                />
                <Route
                  path="number"
                  element={<CakePage cakeName="Number Cake" />}
                />
                <Route
                  path="numbermini"
                  element={<CakePage cakeName="Mini Number Cake" />}
                />
              </Route>
            </Route>
            <Route path="account" element={<AccountPage />} />
            <Route path="*" element={<Home />} />
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
