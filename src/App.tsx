import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { Flex, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import useCustomer from "./hooks/useCustomer";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { customer, setCustomer, orders, error } = useCustomer();
  const [form, setForm] = useState({});

  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/cakeshop", element: <ShopPage /> },
    {
      path: "/cakes",
      children: [
        {
          path: ":type",
          element: (
            <ProductPage onOpen={onOpen} form={form} setForm={setForm} />
          ),
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
      element: <HomePage />,
    },
  ]);

  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" px="20px">
        <Flex justify="center">{element}</Flex>
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
