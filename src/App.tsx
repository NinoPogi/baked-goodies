import { useLayoutEffect, useState } from "react";
import { Divider, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import CakePortfolio from "./pages/CakePortfolio";
import CakeShop from "./pages/CakeShop";
import api from "./services/api-client";
import OrderModal from "./components/OrderModal";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState("ordering");

  useLayoutEffect(() => {
    const apiCall = async () => {
      const response = await api.get("/customer");
      setStatus(response.data[0].status);
    };
    apiCall();
  }, []);

  return (
    <Grid
      templateAreas={`"nav" "main" "footer"`}
      p={{
        md: "0 45px 0 45px",
        lg: "0 80px 0 80px",
        xl: "0 150px 0 150px",
        "2xl": "0 500px 0 500px",
      }}
    >
      <GridItem area="nav">
        <NavBar isOpen={isOpen} onOpen={onOpen} status={status} />
      </GridItem>
      <GridItem area="main">
        <OrderModal
          isOpen={isOpen}
          onClose={onClose}
          status={status}
          setStatus={setStatus}
        />
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
