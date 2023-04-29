import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { Flex, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Home from "./pages/Home";
import CakeShop from "./pages/CakeShop";
import CakePage from "./pages/CakePage";
import AccountPage from "./pages/AccountPage";
import OrderModal from "./components/OrderModal";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import useCustomer from "./hooks/useCustomer";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { customer, setCustomer, orders, error } = useCustomer();
  const [form, setForm] = useState({});

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cakeshop", element: <CakeShop /> },
    {
      path: "/cakes",
      children: [
        {
          path: ":type",
          element: <CakePage onOpen={onOpen} form={form} setForm={setForm} />,
        },
      ],
    },
    {
      path: "/hello",
      element: (
        <AccountPage
          customer={customer}
          setCustomer={setCustomer}
          orders={orders}
        />
      ),
    },
    {
      path: "/*",
      element: <Home />,
    },
  ]);

  return (
    <Grid templateAreas={`"nav" "main" "footer"`} bgColor="teal.100">
      <GridItem area="nav">
        <NavBar customer={customer} />
      </GridItem>
      <GridItem area="main" p="20px 20px" mt={{ base: "66px", lg: "69px" }}>
        {error && <p>{error}</p>}
        <OrderModal
          customer={customer}
          isOpen={isOpen}
          onClose={onClose}
          form={form}
          setForm={setForm}
        />
        <Flex justify="center">{element}</Flex>
      </GridItem>
      <GridItem area="footer" pt="60px">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
