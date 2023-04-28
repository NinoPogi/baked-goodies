import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useRoutes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import routes from "./data/routes";

function App() {
  const element = useRoutes(routes);
  return (
    <Grid templateAreas={`"nav" "main" "footer"`} bgColor="teal.100">
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" p="20px 20px" mt={{ base: "0", lg: "109px" }}>
        <Flex justify="center">{element}</Flex>
      </GridItem>
      <GridItem area="footer" pt="60px">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
